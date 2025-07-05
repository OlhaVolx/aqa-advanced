import { Book } from './Book.js'
import { EBook } from './EBook.js'

//завдання1
const book1 = new Book ("Jane Eyre", "Charlotte Brontë", 1847 )
const book2 = new Book ("Into the Water", "Paula Hawkins", 2017)

book1.printInfo()
book2.printInfo()

//завдання2
const ebook1 = new EBook ("Eat Pray Love", "Elizabeth Gilbert", 2006, "page format" )
const ebook2 = new EBook ("The Red-Headed League", "Arthur Conan Doyle", 1891, "PDF")

ebook1.printInfo()
ebook2.printInfo()

//завдання3: валідація сеттерів
const ebook3 = new EBook (12, 33, null, 28 )

//завдання4: масив книг
let allBooks = [book1, book2, ebook1, ebook2];
const oldestBook = Book.findOldestBook(allBooks);

if (oldestBook) {
    console.log("Найдавніша книга:");
    oldestBook.printInfo();
}
//завдання5: реалізація повернення нового об'єкту Наслідуванням
const newEbookFromBook = EBook.fromBook(book1, "MOBI"); 
newEbookFromBook.printInfo();

const anotherEbookFromBook = EBook.fromBook(book2, "TXT"); 
anotherEbookFromBook.printInfo();