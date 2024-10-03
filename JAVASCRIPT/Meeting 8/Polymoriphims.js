// latihan skilvul no 2

class hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  class harimau extends hewan {
    constructor(nama) {
      super(nama);
    }
  
    makan() {
      return `${this.nama} makan daging`;
    }
  }
  
  let harimau1 = new harimau("harimau sumatra");
  console.log(harimau1.makan());