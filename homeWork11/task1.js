function sayInDelay(text, ms) {
    let message = () => {
        console.log(text);
    };
    setTimeout(message, ms);
}
sayInDelay("Hi", 2000);
