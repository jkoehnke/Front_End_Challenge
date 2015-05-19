function book(title, author) {
  this.title = title || 'New Title';
  this.author = author || 'New Author';
}

Book.prototype.setinfo = function setinfo(title, author) {
  if(title !== undefined) {
    this.title = title;
  }
  if(author !== undefined) {
    this.author = author;
  }
}

function add() {
  return book;
}

function remove() {
  if (book == undefined) {
    console.log("Book is not found.");
  } else {
    return false;
  }
}

function toString() {
  return [title, author];
}
