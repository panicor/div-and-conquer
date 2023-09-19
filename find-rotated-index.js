function findRotatedIndex(arr, num) {
  let pivotIdx = findPivotIdx(arr);
  if (pivotIdx > 0 && num >= arr[0] && num <= arr[pivotIdx - 1]) {
    return biSearch(arr, num, 0, pivotIdx-1);
  } else {
    return biSearch(arr, num, pivotIdx, arr.length - 1);
  }
}

function biSearch(arr, num, left, right) {
  if (num < arr[left] || num > arr[right]) return -1;

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    if (arr[middleIdx] === num) {
      return middleIdx;
    } else if (num < arr[middleIdx]) {
      right = middleIdx - 1;
    } else {
      left = middleIdx + 1;
    }
    
  }
  return -1;
}

function findPivotIdx(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middleIdx = Math.floor((left + right) / 2);
    if (arr[middleIdx] > arr[middleIdx + 1]) {
      return middleIdx + 1;
    } else if (arr[left] <= arr[middleIdx]) {
      left = middleIdx + 1;
    } else {
      right = middleIdx - 1;
    }
  }
}

module.exports = findRotatedIndex;
