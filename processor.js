function processor(transmission) {
  if (transmission.indexOf("::") < 0) {
    return -1;
  };
  const parts = transmission.split('::');
  let rawData = parts[1];
  if (rawData[0] !== '<') {
    rawData = -1;
  };
  const last = rawData.length - 1;
  if (rawData[last] !== '>') {
    rawData = -1;
  };
  if (rawData !== -1) {
    if (rawData.indexOf('>') !== rawData[last]) {
      rawData = -1;
    };
  };
  return {
    id:  Number(parts[0]),
    rawData: rawData
  };
}

module.exports = processor;