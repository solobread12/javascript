function cekKelayakanKursus(terdaftar, pembayaranSukses) {
    if (terdaftar && pembayaranSukses) {
        console.log("Dapat mengikuti kursus");
    } else {
        console.log("Tidak dapat mengikuti kursus");
    }
}

// Contoh input dan output
cekKelayakanKursus(true, true);   // Output: Dapat mengikuti kursus
cekKelayakanKursus(false, true);  // Output: Tidak dapat mengikuti kursus
cekKelayakanKursus(true, false);  // Output: Tidak dapat mengikuti kursus
cekKelayakanKursus(false, false); // Output: Tidak dapat mengikuti kursus
