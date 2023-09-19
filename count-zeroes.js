function countZeroes(arr) {
  let firstZero = findFirstZero(arr);

  if (firstZero === -1) {
    return 0;
  }

  return arr.length - firstZero;
}

function findFirstZero(arr, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let middleIdx = Math.floor((left + right) / 2);
    if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
      return middleIdx;
    } else if (arr[middleIdx] === 1) {
      return findFirstZero(arr, middleIdx + 1, right);
    }
    return findFirstZero(arr, left, middleIdx - 1);
  }
  return -1;
}

console.log(countZeroes([1, 1, 1, 0, 0, 0]));

module.exports = countZeroes;
