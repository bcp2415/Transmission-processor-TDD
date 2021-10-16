function isNumber(input) {
  return !Number.isNaN(parseFloat(input)) && isFinite(input);
}

function processor(transmission) {
  transmission = transmission.trim();
  if (transmission.indexOf("::") < 0) {
    return -1;
  };
  const parts = transmission.split('::');
  if (parts.length > 2) {
    return {
      id: -1,
      rawData: -1,
    };
  };
  if (isNaN(parts[0])) {
    parts[0] = -1;
  };
  let rawData = parts[1];
  if (rawData[0] !== '<') {
    rawData = -1;
  };
  const last = (rawData.length - 1);
  if (rawData[last] !== '>') {
    rawData = -1;
  };
  if (rawData !== -1) {
    if (rawData.indexOf('>') !== last) {
      rawData = -1;
    };
  };
  if (rawData !== -1) {
    if (rawData.lastIndexOf('<') !== 0) {
      rawData = -1;
    };
  };
  if (rawData !== -1) {
    rawData = rawData.slice(1, -1);
    for (character of rawData) {
      if (!isNumber(character)) {
        rawData = -1;
      };
    };
  };
  return {
    id:  Number(parts[0]),
    rawData: rawData
  };
}

module.exports = processor;