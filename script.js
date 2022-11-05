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
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Unread');
myLibrary.push(theHobbit);

const harryPotterStone = new Book('Harry Potter and the Philsopher\'s Stone', 'J.K Rowling', 223, 'Read');
myLibrary.push(harryPotterStone);



// loops through array and displays books
function displayBooks() {
    for (book of myLibrary) {
    }
}

// function that allows users to add new books

function addBookToLibrary() {

}

function destroyTable() {
    
}

// function to remove book from library

function removeBook() {

}



const form  = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

})


