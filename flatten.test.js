const flatten = require('./flatten');

describe("Flatten an Array of Arbitrarily nested Arrays of Integers into a Flat Array of Integers", function() {

  it("Should return an empty array when empty array provided", function() {
      expect(flatten([])).toEqual([]);
  });

  it("Should return an empty array when undefined value provided", function() {
      expect(flatten([undefined])).toEqual([]);
  });
  it("Should return an array with one value when undefined value provided in an array", function() {
      expect(flatten([3, undefined])).toEqual([3]);
  });

  it("Should return a flat array when a flat array is provided", function() {
      expect(flatten([1, 2])).toEqual([1, 2]);
  });

  it("Should return [1,2,3,4] on [[1,2,[3]],4] provided", function() {
      expect(flatten([[1,2,[3]],4])).toEqual([1,2,3,4]);
  });

  it("Should return [1,3,5,6] on [[1,[3],5,6]] provided", function() {
      expect(flatten([[1,[3],5,6]])).toEqual([1,3,5,6]);
  });

  it("Should return [1] on [[[1]]] provided", function() {
      expect(flatten([[[1]]])).toEqual([1]);
  });
});