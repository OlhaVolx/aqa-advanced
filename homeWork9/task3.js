const car1 = {
    brand: "Volvo",
    model:"CX90",
    year: 2020
};
const car2 = {
    brand: "BMW",
    model: "X6",
    owner: "Ivan"
};
const car3 = { ...car1,...car2 };
console.log (car3);
