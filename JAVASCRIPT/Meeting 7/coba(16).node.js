let person = {
    name: "Ahmad",
    age: 25,
    city: "Jakarta"
};

console.log(person.name); // Output: Ahmad
console.log(person["name"]); // Output: Ahmad

person.age = person.age + 5; // Menggunakan dot notation
console.log(person.age); // Output: 30

person["age"] = person["age"] + 5; // Menggunakan bracket notation
console.log(person["age"]); // Output: 35

delete person.city;
console.log(person); // Output: { name: "Ahmad", age: 35 }
