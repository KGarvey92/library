const myLibrary = [];

class Book {
  constructor(title, author, length, status) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.status = status;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.length}, ${this.status}`;
  }
}

const harryPotterStone = new Book(
  "Harry Potter and the Philsopher's Stone",
  'J.K Rowling',
  223,
  'Read',
);
myLibrary.push(harryPotterStone);

const northernLights = new Book(
  'Northern Lights',
  'Philip Pullman',
  399,
  'Read',
);
myLibrary.push(northernLights);

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Unread');
myLibrary.push(theHobbit);

// initialise read and remove button variables

let readButtons;
let removeButtons;

// Remove table in order for it to be recreated with updated library
function destroyTable() {
  const tbody = document.querySelector('tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.lastChild);
  }
}

// allow users to add new books
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // put inputted data into variables
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const length = document.querySelector('#length').value;
  const status = document.querySelector('input[name=readStatus]:checked').value;
  // create new book entry in library
  const newBook = new Book(title, author, length, status);
  myLibrary.push(newBook);
  // update table;
  destroyTable();
  displayBooks();
  // clear form;
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#length').value = '';
  document.querySelector('input[name=readStatus]:checked').checked = false;
});

// Event listener for read button
function changeReadStatus(readButtons) {
  readButtons.forEach((item) => item.addEventListener('click', () => {
    const bookIndex = item.parentNode.dataset.attribute;
    if (item.parentNode.firstChild.textContent === 'Read') {
      item.parentNode.firstChild.textContent = 'Unread';
      myLibrary[bookIndex].status = 'Unread';
    } else {
      item.parentNode.firstChild.textContent = 'Read';
      myLibrary[bookIndex].status = 'Read';
    }
  }));
}

// loops through array and displays books
function displayBooks() {
  const table = document.querySelector('tbody');
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
    const answer = document.createElement('span');
    answer.classList.add('readSpan');
    answer.innerText = `${myLibrary[i].status}`;
    status.dataset.attribute = [i];
    row.appendChild(status);
    status.appendChild(answer);
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
  // update read and remove buttons for event listeners
  readButtons = document.querySelectorAll('.readIcon');
  changeReadStatus(readButtons);
  removeButtons = document.querySelectorAll('.removeBtn');
  removeBook(removeButtons);
}

// Remove book functionality
function removeBook(removeButtons) {
  removeButtons.forEach((item) => item.addEventListener('click', () => {
    const confirmation = confirm('Are you sure?');
    if (!confirmation) {
      return 0;
    }
    const bookIndex = item.parentNode.dataset.attribute;
    myLibrary.splice(bookIndex, 1);
    destroyTable();
    displayBooks();
  }));
}

// Sorting function
function sortTable(property, direction) {
  if (direction === 'asc') {
    if (property === 'length') {
      myLibrary.sort((a, b) => a.length - b.length);
    } else {
      myLibrary.sort((a, b) => a[property].toLowerCase().localeCompare(b[property].toLowerCase()));
    }
  } else if (property === 'length') {
    myLibrary.sort((a, b) => b.length - a.length);
  } else {
    myLibrary.sort((a, b) => b[property].toLowerCase().localeCompare(a[property].toLowerCase()));
  }
  destroyTable();
  displayBooks();
}
// display library
displayBooks();

// event listener for sort buttons
const sortButtons = document.querySelectorAll('.sortIcon');
sortButtons.forEach((item) => item.addEventListener('click', () => {
  sortTable(item.dataset.property, item.dataset.direction);
}));
