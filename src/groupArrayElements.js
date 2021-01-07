const getChunksOfArray = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(array.slice(i, i + size));
    }
    return acc;
  }, []);

/**
 *
 * @param {An array of any type.} arrayElements
 * @param {Should be a positive number. This is the number of slices you want to
 * split the array into.} numberOfSlices
 * @returns {An array of array chunks if you supply valid parameters. If invalid
 * parameters are supplied it will return an empty array.}
 */
const groupArrayElements = (arrayElements, numberOfSlices) => {
  if (
    arrayElements.length === 0 ||
    numberOfSlices <= 0 ||
    numberOfSlices > arrayElements.length
  )
    return [];

  const slicesToSplitInto = Math.round(arrayElements.length / numberOfSlices);
  const chunks = getChunksOfArray(arrayElements, slicesToSplitInto);

  return chunks;
};

export default groupArrayElements;
