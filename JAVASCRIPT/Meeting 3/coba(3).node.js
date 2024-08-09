function checkTicketPrice(age) {
    if (age > 5) {
        return "Tiket penuh";
    } else if (age >= 2 && age <= 5) {
        return "Setengah harga";
    } else if (age < 2) {
        return "Tidak boleh masuk";
    } else {
        return "Usia tidak valid";
    }
}

// Test usia
let ages = [0, 2, 6];
ages.forEach(age => {
    console.log(`Usia: ${age}, Kebijakan: ${checkTicketPrice(age)}`);
});
    