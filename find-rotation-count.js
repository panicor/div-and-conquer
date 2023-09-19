function findRotationCount(arr, left = 0, right = arr.length -1) {
  if(left > right) return 0;
  if(left === right) return left;

  let middleIdx = Math.floor((left + right)/2);

  if(middleIdx < right && arr[middleIdx] > arr[middleIdx + 1]  ){
    return middleIdx + 1;
  }

  if(middleIdx > left && arr[middleIdx] < arr[middleIdx -1]){
    return middleIdx;
  }
   
  if(arr[right] > arr[middleIdx]){
    return findRotationCount(arr, left, middleIdx - 1)
  }

  return findRotationCount(arr, middleIdx + 1, right)
}
console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
module.exports = findRotationCount