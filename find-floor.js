function findFloor(arr, num, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  if (num >= arr[right]) return arr[right];

  let middleIdx = Math.floor((left + right) / 2);

  if (arr[middleIdx] === num) return arr[middleIdx];

  if(middleIdx > 0 && arr[middleIdx - 1] <= num && num < arr[middleIdx]){
    return arr[middleIdx - 1]
  }

  if (num < arr[middleIdx]) {
    return findFloor(arr, num, left, middleIdx - 1);
  }

  return findFloor(arr, num, middleIdx + 1, right)

}

module.exports = findFloor;
