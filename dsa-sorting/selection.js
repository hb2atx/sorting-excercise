// Assign the first element to be the smallest value (this is called the minimum). It does not matter right 
// now if this is actually the smallest value in the array.

// Compare this item to the next item in the array until you find a smaller number.

// If a smaller number is found, designate that smaller number to be the new “minimum” 
// and continue until the end of the array.

// If the “minimum” is not the value (index) you initially began with, swap the two values. 
// You will now see that the beginning of the array is in the correct order (similar to how after 
// the first iteration of bubble sort, we know the rightmost element is in its correct place).

// Repeat this with the next element until the array is sorted.

function selectionSort() {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++){
        let minIndex = i;
        // Find the index of the minimum element in the remaining unsorted array
        for(let j = i + 1; j < length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
         // Swap the found minimum element with the first element
    if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
}

module.exports = selectionSort;