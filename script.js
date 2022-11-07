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

const northernLights = new Book('Northern Lights', 'Philip Pullman', 399, 'Read');
myLibrary.push(northernLights);



// loops through array and displays books
function displayBooks() {
    const table = document.querySelector('thead');
    for (let i = 0; i < myLibrary.length; i++) {
        const row = document.createElement('tr');
        row.dataset.attribute = [i];
        table.appendChild(row);
        const title = document.createElement('td');
        title.innerText = `${myLibrary[i].title}`;
        title.dataset.attribute = [i];
        row.appendChild(title);
        const author = document.createElement('td');
        author.innerText = `${myLibrary[i].author}`;
        author.dataset.attribute = [i];
        row.appendChild(author);
        const length = document.createElement('td');
        length.innerText = `${myLibrary[i].length}`;
        length.dataset.attribute = [i];
        row.appendChild(length);
        const status = document.createElement('td');
        status.innerText = `${myLibrary[i].status}`;
        status.dataset.attribute = [i];
        row.appendChild(status);
        const readIcon = document.createElement('img');
        readIcon.src = 'images/eye.svg';
        readIcon.alt = 'toggle read/unread';
        readIcon.classList.add('readIcon');
        status.appendChild(readIcon);
        const remove = document.createElement('td');
        remove.dataset.attribute = [i];
        row.appendChild(remove); 
        const removeIcon = document.createElement('img');
        removeIcon.src = 'images/x-square.svg';
        removeIcon.alt = 'remove book';
        removeIcon.classList.add('removeBtn');
        remove.appendChild(removeIcon);
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

displayBooks();


const form  = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

})


