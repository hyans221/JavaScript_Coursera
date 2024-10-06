let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: authorName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else {
        alert('Vui lòng điền tất cả các trường.');
    }
}


function showbooks() {
    const displayBooks = books.map((item, index) => `<h1>Book number: ${index + 1}</h1>
    <p>Book Name: ${item.bookName}</p>
    <p>Author Name: ${item.authorName}</p>
    <p>Book Description: ${item.bookDescription}</p>
    <p>No. of Pages Time: ${item.pagesNumber}</p>
    <button onclick="editbook(${index})">Edit</button>
    <button onclick="deletebook(${index})">Delete</button>`
    ).join('');

    document.getElementById('books').innerHTML = displayBooks;
}


function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deletebook(index) {
    // const deleteBook = books.find((book, index)=> book.)

    books.splice(index, 1);
    showbooks();
}