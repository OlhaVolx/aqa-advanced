function decriment (num) {
    console.log(num);
    if (num > 0) {
        return decriment(num - 1);
    }
}
decriment(5);
