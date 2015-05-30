function Book(title, author, enshelf, unshelf) {
  this.title = title;
  this.author = author;
  this.enshelf = enshelf;
  this.unshelf = unshelf;
}

var casual = new Book("Casual Vacancy", "J.K. Rowling", true, false);
    quiet = new Book("Quiet", "Susan Cain", false, true);
    rumor = new Book("A Rumor of War", "Philip Caputo", true, false);


function Shelf(shelfNumber, shelfName) {
    this.shelfNumber = shelfNumber;
    this.shelfName = shelfName;
    this.books = new Array();
    this.addBook = function(book) {
      this.books[this.books.length] = book;
    }
    this.displayBooks = function() {
      for(i=0; i < this.books.length; i++) {
        displayBooks(this.books[i]);
      }
    }
}

var shelf100 = new Shelf('100', 'Philosophy and Psychology');
    shelf200 = new Shelf('200', 'Religion');
    shelf300 = new Shelf('300', 'Social Sciences');


var shelfTotal = [shelf100, shelf200, shelf300];
var bookInventory = [casual, quiet, rumor];


function displayBooks(book) {
  console.log(book.title + " " + book.shelfName + "  ");
}


var showBooks = function() {
  for(i=0; i < bookInventory.length; i++) {
    displayBooks(bookInventory[i]);
  }
}

showBooks();
console.log("Total number of books: " + bookInventory.length);
