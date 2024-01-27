/**
 * Least Disruptive Sub-Range
 * @param {number[]} original 
 * @param {number[]} replacement 
 */
function lds(original, replacement) {
  let leastDistance = -1;
  let leastDistanceIndex = 0;
  for (indexOriginal = 0; indexOriginal <= original.length - replacement.length; indexOriginal++) {
    let distanceSum = 0;
    for (indexReplacement = 0; indexReplacement < replacement.length; indexReplacement++) {
      distanceSum += Math.abs(original[indexOriginal+indexReplacement] - replacement[indexReplacement]);
    }
    if (leastDistance === -1 || leastDistance > distanceSum) {
      leastDistance = distanceSum;
      leastDistanceIndex = indexOriginal
    }
  }
  return leastDistanceIndex;
}


function test() {
  const original = [1,2,3,4,5];
  const replacement = [4,5,5];
  const diffSum = lds(original, replacement);
  console.log(diffSum)
}

test();