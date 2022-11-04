function Book(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.length}, ${this.status}`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read');
console.log(theHobbit.info());