const getChunksOfArray = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(array.slice(i, i + size));
    }
    return acc;
  }, []);

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
