let hari = "Sabtu"; // Ganti nilai ini dengan nama hari yang ingin dievaluasi

switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        console.log("Weekday");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Weekend");
        break;
    default:
        console.log("Nama hari tidak valid");
}
