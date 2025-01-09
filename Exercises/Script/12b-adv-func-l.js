let count = 0;
function countPositive(nums) {
    nums.forEach(element => {
        if (element >= 0) {
            count++;
        }
    });
    return count;
}
console.log(countPositive([-3,5,-16,2,15]));