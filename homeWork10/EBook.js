import { Book } from './Book.js'

export class EBook extends Book {
    constructor (name,  author, year, fileFormat) {
        super (name, author, year);
        this.fileFormat = fileFormat;
    }
    
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(newFormat) {
        if (typeof newFormat !== 'string' || newFormat.length === 0) {
            console.error("Формат файлу повинен бути рядком та мати від одного символа.");
            return;
        }
        this._fileFormat = newFormat;
    }
    
     printInfo () {
        super.printInfo(); 
        console.log(`This book in ${this.fileFormat} format.`)
    }
}