function klasifikasiSiswa(nilai, kehadiran, totalPertemuan) {
    let kategori;
    let statusKelulusan;

    // Menentukan kategori nilai ujian
    if (nilai > 85) {
        kategori = "Kategori A";
    } else if (nilai >= 70 && nilai <= 85) {
        kategori = "Kategori B";
    } else if (nilai >= 50 && nilai < 70) {
        kategori = "Kategori C";
    } else {
        kategori = "Tidak Lulus";
    }

    // Menentukan status kelulusan berdasarkan kehadiran
    if (kehadiran / totalPertemuan >= 0.75) {
        statusKelulusan = "Lulus";
    } else {
        statusKelulusan = "Tidak Lulus";
    }

    // Mencetak hasil ke konsol
    if (kategori !== "Tidak Lulus") {
        console.log(`${kategori}: ${statusKelulusan}`);
    } else {
        console.log("Tidak Lulus");
    }
}

// Contoh input dan output
klasifikasiSiswa(90, 20, 25); // Output: Kategori A: Lulus
klasifikasiSiswa(80, 18, 25); // Output: Kategori B: Lulus
klasifikasiSiswa(65, 10, 15); // Output: Kategori C: Lulus
klasifikasiSiswa(40, 21, 25); // Output: Tidak Lulus
