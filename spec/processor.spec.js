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
  })
});