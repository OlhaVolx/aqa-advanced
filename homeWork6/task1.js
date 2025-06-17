//function declaration
function getRectangleArea(width, height) {
    return width*height;
} 
console.log(getRectangleArea(15,20))

//function expression
const rectangleArea = function (width, height) {
    return width*height;
}
console.log(rectangleArea(8,11))

//arrow function expression
const calculateRectangleArea = (width, height) => {
     return width*height;
}
console.log(calculateRectangleArea(5.47, 9.52).toFixed(2))