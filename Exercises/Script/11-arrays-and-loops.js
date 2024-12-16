// 11a
const nums = [10, 20 ,30];
nums[2] = 99;
console.log(nums)

// 11b
function getLastValue(array) {
    const lastIndex = array.length-1
    console.log(array[lastIndex]);
}
getLastValue(nums);

// 11c
function arraySwap(array) {
    firstIndex = 0;
    lastIndex = array.length-1;

    let temp = array[firstIndex];
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = temp;
    
    console.log(array);
}
arraySwap(nums);

// 11d
for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

// 11e
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

// 11f
let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

// 11g
const numArray = [1,2,3];
for (let i = 0; i < numArray.length; i++) {
    numArray[i]++;
}
console.log(numArray);

// 11h
function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
    console.log(array);
}
addOne(nums);

// 11i
function addNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        array[i] += num;
    }
    console.log(array);
}
addNum(nums,4);

// 11j
function addArrays(array1, array2) {
    let finalArray = [];
    for (let i = 0; i < array1.length; i++) {
        finalArray[i] = array1[i] + array2[i];
    }
    console.log(finalArray);
}
addArrays(nums, numArray);

// 11k
function countPositive(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            count++;
        }
    }
    console.log(`total positive numbers: ${count}`);
}
countPositive([3,-5,34,0,-1]);

// 11l,m
function minMax(nums) {
    let minMax = {
        max: 0,
        min: 100
    }
    if (nums.length === 0)
    {
        minMax.max = null;
        minMax.min = null;
        console.log(minMax);
        return;
    }
    for  (let i = 0; i < nums.length; i++) {
        if (nums[i] > minMax.max) {
            minMax.max = nums[i];
        }
        if (nums[i] < minMax.min) {
            minMax.min = nums[i];
        }
    }
    console.log(minMax);
}
minMax([]);

// 11n
wordsArray = ['apple','grape','apple','apple']
function countWords(words) {
    const wordsObject = {'apple':10};
    for (let i = 0; i < words.length; i++) {
        let temp;
        temp = words[i];
        console.log(wordsObject.hasOwnProperty(temp));
        if (wordsObject.hasOwnProperty(temp)) {
            wordsObject;
        }
        else {
            wordsObject.temp = 1;
        }
    }
    console.log(wordsObject);
}
countWords(wordsArray);


function tryX() {
    console.log('***************************');
    xObject = {};
    xObject.teamOf = 4;
    xObject.teamAdd = 5;
    if ('teamAdd' in xObject) {
        console.log(typeof teamAdd);
        xObject.teamAdd++
    }
    console.log(xObject);
}
tryX();
