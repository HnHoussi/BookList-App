// Book Class : to represent a Book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class : to handle UI Tasks

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "book 1",
        author: "john doe",
        isbn: "46842",
      },
      {
        title: "book 2",
        author: "john doe 2",
        isbn: "4684572",
      },
    ];
    const books = storedBooks;
    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete' >X</a></td>
         `;

    list.appendChild(row);
  };

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector("#title").value='';
    document.querySelector("#author").value='';
    document.querySelector("#isbn").value='';
  }
}

// Store Class : handle LocalStorage

// Event to display a book

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event to add a book

document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Get form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Create a book 
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.clearFields();
});

// Event to remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});