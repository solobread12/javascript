//Soal 1

class mobil {
    constructor(merek, tahun) {
      var _merek = merek;
      var _tahun = tahun;
  
      this.setMerek = function (merek) {
       _merek = merek;
      };
  
      this.setTahun = function (tahun) {
        _tahun = tahun;
      };  
  
      this.getMerek = function () {
        return _merek;
      };
  
      this.getTahun = function () {
        return _tahun;
      };
    }
    
    spek() {
      return `mobil ini bermerek ${this.getMerek()} dikeluarkan pada tahun ${this.getTahun()}`;
    }
  }
  
  let mobil1 = new mobil("honda", 2010);
  console.log(mobil1.spek());
  mobil1.setMerek('Toyota')
  console.log(mobil1.spek());
  
  
  //Soal 1
  
  //Saol 2
  
  class pesawat {
    constructor(jenis, kecepatan) {
      var _jenis = jenis;
      var _kecepatan = kecepatan;
  
      this.setJenis = function (jenis) {
        _jenis = jenis;
      };
  
      this.setKecepatan = function (kecepatan) {
        _kecepatan = kecepatan;
      };
  
      this.getJenis = function () {
        return _jenis;
      };
  
      this.getKecepatan = function () {
        return _kecepatan;
      };
    }
    terbang() {
      return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()}`;
    }
  }
  
  class jet extends pesawat {
    constructor(jenis, kecepatan, KapasitasBahanBakar) {
      super(jenis, kecepatan);
      var _KapasitasBahanBAkar = KapasitasBahanBakar; 
  
      this.setKapasitasBahanBakar = function (KapasitasBahanBakar) {
        _KapasitasBahanBAkar = KapasitasBahanBakar;
      };
  
      this.getKapasitasBahanBakar = function () {
        return _KapasitasBahanBAkar;
      };
    }
    isi() {
      return `Pesawat dengan jenis ${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()} dengan kapasitas bahan bakar ${this.getKapasitasBahanBakar()}`;
    }
  }
  
  let pesawat1 = new pesawat("airbus", 300);
  console.log(pesawat1.terbang());
  
  let jet1 = new jet("airbus", 300, 1000);
  console.log(jet1.isi());
  
  //Soal 2
  
  //Soal 3
  
  class karyawan {
    constructor(nama, jabatan, gaji) {
      var _nama = nama;
      var _jabatan = jabatan;
      var _gaji = gaji;
  
      this.setnama = function (nama) {
        _nama = nama;
      };
  
      this.setgaji = function (gaji) {
        _gaji = gaji;
      };
  
      this.setjabatan = function (jabatan) {
        _jabatan = jabatan;
      };
  
      this.getnama = function () {
        return _nama;
      };
  
      this.getgaji = function () {
        return _gaji;
      };
  
      this.getjabatan = function () {
        return _jabatan;
      };
    }
  }
  
  class manajer extends karyawan {
    constructor(nama, jabatan, gaji, tunjangan) {
      super(nama, jabatan, gaji);
      var _tunjangan = tunjangan;
  
      this.settunjangan = function (tunjangan) {
        _tunjangan = tunjangan;
      };
  
      this.gettunjangan = function () {
        return _tunjangan;
      };
    }
  
    beriTunjangan() {
      return `Manajer ${this.getnama()} dengan jabatan ${this.getjabatan()} diberi gaji sebesar ${this.getgaji()} Rupiah dan tunjangan sebesar ${this.gettunjangan()} Rupiah`;
    }
  }
  
  let karyawan1 = new manajer("Yewon", "Manager", 5000000, 1000000);
  
  console.log(karyawan1.beriTunjangan());
  
  //Soal 3
  
  //Soal 4
  
  class kendaraan {
    constructor(kecepatan) {
      var _kecepatan = kecepatan;
  
      this.setKecepatan = function (kecepatan) {
        _kecepatan = kecepatan;
      };
  
      this.getKecepatan = function () {
        if (_kecepatan < 0) {
          return (kecepatan = 0);
        } else {
          return (_kecepatan = kecepatan);
        }
      };
    }
  }
  
  let kendaraan1 = new kendaraan();
  console.log(kendaraan1.getKecepatan());
  
  //Soal 4 
  
  //Soal 5 
  
  class akunBank {
    constructor(saldo, setoran) {
      var _saldo = saldo;
      var _setoran = setoran;
      this.setSaldo = function (saldo) {
        _saldo = saldo;
      };
  
      this.setSetoran = function (setoran) {
        _setoran = setoran;
      };
  
      this.getSetoran = function () {
        return _setoran;
      };
      this.getSaldo = function () {
        if (_saldo < 0) {
          return (saldo = Null);
        } else {
          return (_saldo = saldo + setoran);
        }
        return _saldo;
      };
    }
  }
  
  let akun1 = new akunBank(2000, 5000);
  console.log(akun1.getSaldo());
  
  //Soal 5
  
  //Soal 6
  class karyawan2 {
    constructor(nama, gaji) {
      var _nama = nama;
      var _gaji = gaji;
  
      this.setnama = function (nama) {
        _nama = nama;
      };
  
      this.setgaji = function (gaji) {
        _gaji = gaji;
      };
  
      this.getnama = function () {
        return _nama;
      };
  
      this.getgaji = function () {
        return _gaji;
      };
    }
  }
  
  class manajer2 extends karyawan2 {
    constructor(nama, gaji) {
      super(nama, gaji);
    }
    laporan() {
      return `Manajer ${this.getnama()} diberi gaji sebesar ${this.getgaji()} Rupiah`;
    }
  }
  
  let karyawan3 = new manajer2("Yewon", 5000000);
  console.log(karyawan3.laporan());
