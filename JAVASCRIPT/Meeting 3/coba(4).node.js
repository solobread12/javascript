function checkSIMEligibility(age) {
    if (age >= 17) {
        return "Berhak mendapatkan SIM";
    } else {
        return "Belum berhak mendapatkan SIM";
    }
}

// Test usia
let ages = [8, 17, 28];
ages.forEach(age => {
    console.log(`Usia: ${age}, Status: ${checkSIMEligibility(age)}`);
});
