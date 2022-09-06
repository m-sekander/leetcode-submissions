/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const result = [];
    
  const reducedMat = [];
  for (item of mat) {
    reducedMat.push(item.reduce((p,c) => p+c));
  }
  
  const dummyNumber = reducedMat.reduce((p,c) => p + c)
    
  for (let i=0; i<k; i++) {
    const minIndex = reducedMat.indexOf(Math.min(...reducedMat));
    result.push(minIndex);
    reducedMat.splice(minIndex, 1, dummyNumber);
  }
    
  return result
};