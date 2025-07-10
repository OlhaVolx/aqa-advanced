function getTodo1() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .catch(() => console.error("Error message Todo1"));
}

function getTodo2() {
    return fetch("https://jsonplaceholder.typicode.com/todos/2")
        .then((response) => response.json())
        .catch(() => console.error("Error message Todo2"));
}

function getTodo3() {
    return fetch("https://jsonplaceholder.typicode.com/todos/3")
        .then((response) => response.json())
        .catch(() => console.error("Error message Todo3"));
}

function getUser1() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .catch(() => console.error("Error message User1"));
}

function getUser2() {
    return fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((response) => response.json())
        .catch(() => console.error("Error message User2"));
}

function getUser3() {
    return fetch("https://jsonplaceholder.typicode.com/users/3")
        .then((response) => response.json())
        .catch(() => console.error("Error message User3"));
}

const promisesCollection = Promise.all([getTodo1(), getTodo2(), getTodo3(), getUser1(), getUser2(), getUser3()]);
promisesCollection.then(console.log);

Promise.race([getTodo1(), getTodo2(), getTodo3(), getUser1(), getUser2(), getUser3()])
    .then((firstResult) => {
        console.log("Promise, що завершився:", firstResult);
    })
    .catch((firstError) => {
        console.error("Promise відхилено:", firstError);
    });
