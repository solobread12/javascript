const x = -6;
const y = 5;

if (x > 0 && y > 0) {
  console.log("Kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Kiri atas");
}