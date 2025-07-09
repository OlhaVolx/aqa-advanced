async function getTodo1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
async function getTodo2() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
async function getTodo3() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
async function getUser1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
async function getUser2() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
async function getUser3() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
const promisesCollection = Promise.all([getTodo1(), getTodo2(), getTodo3(),getUser1(), getUser2(), getUser3()]);
promisesCollection.then(console.log)

Promise.race([getTodo1(), getTodo2(), getTodo3(), getUser1(), getUser2(), getUser3()])
  .then(firstResult => {
    console.log("Promise, що завершився:", firstResult);
  })
  .catch(firstError => {
    console.error("Promise відхилено:", firstError);
  });
