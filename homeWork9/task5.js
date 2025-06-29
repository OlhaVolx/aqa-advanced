const users = [
  { name: "Mykola", email: "mykola@email.com", age: 18, status: "student"},
  { name: "Dmytro", email: "dmytro@email.com",age: 38, status: "adult"},
  { name: "Yulia", email: "yulia@email.com",age: 73, status: "retired"}
];
for (const {name,email,age,status} of users){
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Status: ${status}`)
}