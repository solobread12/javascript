function checkNumberType(number) {
    if (number > 0) {
        return "Positif";
    } else if (number < 0) {
        return "Negatif";
    } else {
        return "Netral";
    }
}

// Test angka
let numbers = [0, -5, 25];
numbers.forEach(number => {
    console.log(`Angka: ${number}, Tipe: ${checkNumberType(number)}`);
});

// Angka: 0, Tipe: Netral
// Angka: -5, Tipe: Negatif
// Angka: 25, Tipe: Positif
