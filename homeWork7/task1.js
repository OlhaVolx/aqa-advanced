function handleNum (num, evenCallback, oddCallback){
    if (num % 2 === 0){
        evenCallback();
    }
    else {
        oddCallback();
    }
}

function handleEven (num) {
    console.log("Number is even")

}

function handleOdd (num) {
    console.log("Number is odd")
}
handleNum (4, handleEven, handleOdd)