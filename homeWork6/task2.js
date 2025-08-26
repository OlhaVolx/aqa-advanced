function isAdult (age) {
    if (age >= 18 ) {
        return"You are adult";
    } else {
        return"You are not adult";
    }
}
console.log(isAdult(15))
console.log(isAdult(25))