import groupArrayElements from "./groupArrayElements";

it("when array length === 0 then return []", () => {
  expect(groupArrayElements([], 0)).toEqual([]);
});

it("when N is 0 then return []", () => {
  expect(groupArrayElements([[1, 2]], 0)).toEqual([]);
});

it("when N is < 0 then return []", () => {
  expect(groupArrayElements([[1, 2]], -5)).toEqual([]);
});

describe("when N is positive", () => {
  it("when N is > the array length then return an empty []", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 10)).toEqual([]);
  });

  it("when the array can be divided equally by N then split it into chunks and return it", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it("when the array cannot divided equally by N then split it into chunks and append the last element", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });
});
