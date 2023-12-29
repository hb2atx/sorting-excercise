/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = starts + 1; i <= end; i++){
        swapIdx++;
        swap(arr, swapIdx, i);
    }
}
swap(arr, start, swapIdx);
return swapIdx;

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
  
      // Sort left side
      quickSort(arr, left, pivotIndex - 1);
      
      // Sort right side
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

module.exports = quickSort;