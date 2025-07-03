export class Book {
    constructor (name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    }
    get name(){
        return this._name;
    }
    set name (newName){
        if (typeof newName !== 'string'|| newName.length === 0){
            console.log("Назва книги повинна бути рядком та мати від одного символа.");
            return;
        }
         this._name = newName;
    }

    get author() {
        return this._author;
    }
    set author(newAuthor) {
        if (typeof newAuthor !== 'string' || newAuthor.length === 0) {
            console.log("Ім'я автора повинен бути рядком та мати від одного символа");
            return;
        }
        this._author = newAuthor;
    }

     get year() {
        return this._year;
    }
    set year(newYear) {
        if (typeof newYear !== 'number') {
            console.log("Рік має бути числом");
            return;
        }
        this._year = newYear;
    }

    printInfo () {
        console.log(`The book ${this.name} was written by ${this.author} in ${this.year}`)
    }

    static findOldestBook(books) {
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    }

}