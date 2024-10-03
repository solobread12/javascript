const person = {
    name: 'John',
    age: 30
  };
  
  const { name, age } = person;
console.log(name); // Output: John
console.log(age);  // Output: 30

const { name: userName, age: userAge } = person;
console.log(userName); // Output: John
console.log(userAge);  // Output: 30
  