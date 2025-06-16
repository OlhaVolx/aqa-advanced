let numbers = [1,2,3,4,5,6,7,8,9,10]
const number = 6;
let index = 0; 

while (index <=9) {
    let result = numbers[index]*number
    console.log(`${number} * ${index+1} = ${result}`)
    index++;
}