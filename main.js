const table = document.getElementById("table");

const myLibrary = [];

function Book(title, author, page, publishYear, isRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.publishYear = publishYear;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, page, publishYear, isRead){
    let newBook = new Book(title, author, page, publishYear, isRead);
    return myLibrary.push(newBook);
}

addBookToLibrary('lotr', 'tolkien', 399, 1983, 0)
addBookToLibrary('dune', 'herbert', 766, 1989, 1)

console.log(myLibrary)

myLibrary.forEach(book => {
    let newRow = table.insertRow(-1);
    for (let i = 0; i < Object.entries(book).length; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerText = book[Object.keys(book)[i]];
    }
});