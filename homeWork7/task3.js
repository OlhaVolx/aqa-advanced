function divide (numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new  TypeError ("Аргумент не є числом");
    }
    if ( denominator ===0) {
        throw new TypeError ("Ділити на нуль не можна");
    }
    return numerator/denominator;
}

try {
    console.log(divide(3,0));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("test",25));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(5,"test"));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(null,10));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(5,true));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(2,10));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}
