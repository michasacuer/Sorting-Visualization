function quickSort(array, startIndex, endIndex) {
    if (startIndex < endIndex) {
        let partitionIndex = partition(array, startIndex, endIndex);

        quickSort(array, startIndex, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, endIndex);
    }

    return array;
}

function partition(array, startIndex, endIndex) {
    let pivot = array[endIndex];
    let index = startIndex - 1;

    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] <= pivot) {
            index++;

            let swapTemp = array[i];
            array[index] = array[i];
            array[i] = swapTemp
        }
    }

    let swapTemp = array[index + 1];
    array[index + 1] = array[endIndex];
    array[endIndex] = swapTemp;

    return index + 1;
}