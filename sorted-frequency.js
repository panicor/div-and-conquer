function sortedFrequency(arr, num) {
  let firstIdx = findFirstIdx(arr, num);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLastIdx(arr, num);
  return lastIdx - firstIdx + 1;
}

function findFirstIdx(arr, num, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let middleIdx = Math.floor((right + left) / 2);
    if (
      (middleIdx === 0 || num > arr[middleIdx - 1]) &&
      arr[middleIdx] === num
    ) {
      return middleIdx;
    } else if (num > arr[middleIdx]) {
      return findFirstIdx(arr, num, middleIdx + 1, right);
    } else {
      return findFirstIdx(arr, num, left, middleIdx - 1);
    }
  }
  return -1;
}

function findLastIdx(arr, num, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let middleIdx = Math.floor((right + left) / 2);
    if (
      (middleIdx ===arr.length-1 || num < arr[middleIdx + 1]) &&
      arr[middleIdx] === num
    ) {
      return middleIdx;
    } else if (num < arr[middleIdx]) {
      return findLastIdx(arr, num, left, middleIdx - 1);
    } else {
      return findLastIdx(arr, num, middleIdx + 1, right);
    }
  }
  return -1;
}

console.log(sortedFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3], 2));
module.exports = sortedFrequency;
