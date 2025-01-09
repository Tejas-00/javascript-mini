function addNum(array, num) {
    // for (let i = 0; i < array.length; i++) {
    //     array[i] += num;
    // }
    array.forEach((value, index) => {
        array[index] += num;
    });
    return array;
}
console.log(addNum([1,1,3], 2));