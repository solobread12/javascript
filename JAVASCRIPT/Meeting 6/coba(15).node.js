// Deklarasi dan Akses Array
let identity = ["nama antum", "usia", "asal kota"];
console.log(identity[1]); // Output: usia

// Mengubah Elemen Array
identity[0] = "nama terakhir antum";
console.log(identity); // Output: ["nama terakhir antum", "usia", "asal kota"]

// Menghapus Elemen Array
identity.splice(1, 1); // Menghapus elemen kedua (usia)
console.log(identity); // Output: ["nama terakhir antum", "asal kota"]

// Menggabungkan Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Mencari Elemen Array
let index = identity.indexOf("asal kota");
console.log(index); // Output: 1

// Mengurutkan Array
let numbers = [34, 7, 23, 32, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [5, 7, 23, 32, 34]

// Menghitung Banyak Data dalam Array
let count = numbers.length;
console.log(count); // Output: 5
