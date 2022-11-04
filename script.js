let myLibrary = [];

function Book(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
}

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.length}, ${this.status}`;
}

// loops through array and displays books
function displayBooks() {

}

// function that allows users to add new books

function addBookToLibrary() {

}