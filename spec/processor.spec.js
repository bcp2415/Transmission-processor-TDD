const processor = require('../processor.js');

describe("transmission processor", function() {

  //  TODO: put tests here
  it("takes a string and returns an object", function() {
    const result = processor('9701::<489584872710>');
    expect(typeof result).toEqual('object');
  });

  it("returns -1 if '::' not found", function() {
    const result = processor('9701<489584872710>');
    expect(result).toEqual(-1);
  });

  it("should return an object with an id property", function() {
    const result = processor('9701::<489584872710>');
    expect(result.id).not.toEqual(undefined);
  });

  it("converts id to a number", function() {
    const result = processor('9701::<489584872710>');
    expect(result.id).toEqual(9701);
  });

  it("returns raw data in object", function() {
    const result = processor('9701::<489584872710>');
    expect(result.rawData).not.toEqual(undefined);
  });

  it("returns -1 for rawData if missing < at position 0", function() {
    const result = processor('9701::489584872710>');
    expect(result.rawData).toEqual(-1);
  });

  it("returns -1 for rawData if missing > at last position", function() {
    const result = processor('9701::<8729740349572>0912');
    expect(result.rawData).toEqual(-1);
  });

  it("returns -1 for rawData if > is present but in wrong position", function() {
    const result = processor('9701::<8729740349572>0912>');
    expect(result.rawData).toEqual(-1);
  });

  it("returns -1 for rawData if < is present but in wrong position", function() {
    const result = processor("9701::<4872<97403495720912>");
    expect(result.rawData).toEqual(-1);
  });
});