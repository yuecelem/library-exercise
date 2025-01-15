const table = document.getElementById("table");
const dialog = document.getElementById('dialog');
const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');


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
    console.log("New book created:", newBook)
    return myLibrary.push(newBook);
}

addBookToLibrary('lotr', 'tolkien', 399, 1983, 0)
addBookToLibrary('dune', 'herbert', 766, 1989, 1)
addBookToLibrary('book2', 'author2', 7226, 1789, 0)



console.log(myLibrary)

function clearLib() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

function makeLib() {
    console.log(myLibrary)
    clearLib();
    
    myLibrary.forEach(book => {
        let newRow = table.insertRow(-1);
        for (let i = 0; i < Object.entries(book).length; i++) {
            let newCell = newRow.insertCell(i);
            
            if(i == 4 && book[Object.keys(book)[i]] === 1) {
                newCell.innerHTML = '<input type = "checkbox" name = "isRead" checked/>';
            } else if (i == 4 && book[Object.keys(book)[i]] !== 1) {
                newCell.innerHTML = '<input type = "checkbox" name = "isRead" unchecked/>';
            } else newCell.innerText = book[Object.keys(book)[i]];
        }
    });

}

makeLib()



addBtn.addEventListener("click", () => {
    dialog.showModal();
})

cancelBtn.addEventListener("click", () => {
    dialog.close();
})

confirmBtn.addEventListener("click", (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const publishYear = document.getElementById('publish-year').value;
    const isRead = document.getElementById('is-read').value;

    e.preventDefault();

    if ((title == null || title == '') || (author == null || author == '') || (pages == null || pages == '') || (publishYear == null || publishYear == '') || (isRead == null || isRead == '')) {
        window.alert("Please fill all fields!")
        console.log("alert")
    } else {

    addBookToLibrary(title, author, pages, publishYear, isRead);
    makeLib();
    document.querySelector('form').reset();
    dialog.close(); }
    

    
})


