// Deklarasi kelas Book
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // Metode untuk mendapatkan detail buku
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }

    // Metode untuk mengubah nama penulis
    updateAuthor(newAuthor) {
        this.author = newAuthor;
    }
}

// Instansiasi objek dari kelas Book
const myBook = new Book("JavaScript Essentials", "Jane Doe");

// Memanggil metode getDetails
console.log(myBook.getDetails()); // Output: Title: JavaScript Essentials, Author: Jane Doe

// Menggunakan metode updateAuthor untuk mengubah nama penulis
myBook.updateAuthor("John Smith");

// Memanggil metode getDetails lagi untuk melihat perubahan
console.log(myBook.getDetails()); // Output: Title: JavaScript Essentials, Author: John Smith
