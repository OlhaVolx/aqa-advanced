let personAge = 18;
console.log("Person Age is " + personAge);

function checkIfAdult (personAge) {
    if (personAge > 18) {
        console.log(true);
    } else if (personAge < 18) {
        console.log(false);
    }else {
        console.log("З повноліттям!");
    }

}
checkIfAdult (personAge); // just decided to try if-else

const isAdult = personAge >=18;
console.log(isAdult);