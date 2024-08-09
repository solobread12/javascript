function validateRegistration(age) {
    if (age >= 18) {
        console.log("Registrasi berhasil");
    } else {
        console.log("Registrasi gagal");
    }
}

// Test usia
let userAges = [16, 18, 21];
userAges.forEach(age => {
    console.log(`Usia: ${age}`);
    validateRegistration(age);
});




// Usia: 16
// Registrasi gagal
// Usia: 18
// Registrasi berhasil
// Usia: 21
// Registrasi berhasil
