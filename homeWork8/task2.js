const numbers = [1, 2, 3, 4, 5];
function updateNumbers(nums) {
    return nums.map((num, i) => num * i);
}

const updatedNumbers = updateNumbers(numbers);
console.log(updatedNumbers);
