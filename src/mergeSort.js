function mergeSort(array, arrayLength) {
    if (arrayLength < 2) {
        return array;
    }

    let middle = arrayLength / 2;
    let left = [];
    let right = [];

    for (let i = 0; i < middle; i++) {
        left[i] = array[i];
    }

    for (let i = middle; i < arrayLength; i++) {
        right[i - middle] = array[i];
    }

    mergeSort(left, middle);
    mergeSort(right, arrayLength - middle);

    return merge(array, left, right, middle, arrayLength - middle);
}

function merge(array, l, r, left, right) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left && j < right) {
        if (l[i] <= r[j]) {
            array[k++] = l[i++];
        } else {
            array[k++] = r[j++];
        }
    }

    while (i < left) {
        array[k++] = l[i++];
    }

    while (j < right) {
        array[k++] = r[j++];
    }

    return array;
}