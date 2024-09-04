// tugas skilvul no 1
class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode kamu di bawah ini
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
  
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }
  let user = new Pelajar("Rayyan", 16, "abudzar");
  console.log(user);