const myLibrary =[];

function Book(title, author, pageNum, isRead){
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pageNum}, ${this.isRead ? 'read' : 'not read yet'}`
    }
}

function addBookToLibrary(title, author, pageNum, isRead){
    const newBook = new Book(title, author, pageNum, isRead);
    myLibrary.push(newBook);
    render();
}

function render(){

const bookList = document.querySelector("#bookList");
bookList.innerHTML ='';

myLibrary.forEach((book, index) =>{
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookInfo = document.createElement('p');
    bookInfo.textContent = book.info();

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove');
    removeButton.addEventListener('click',() => removeBtn(index));

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = book.isRead ? 'Marked as unread' : 'Mark as read';
    toggleReadButton.addEventListener('click',() => toggleButton(index));

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleReadButton);

    bookList.appendChild(bookCard);
})
}

function removeBtn(index){
    myLibrary.splice(index, 1);
    render();
}


function toggleButton(index){
    myLibrary[index].isRead = !myLibrary[index].isRead;
    render();
}

const newBookButton = document.querySelector('#newBookButton');
newBookButton.addEventListener('click',() => openForm());

const addBookForm = document.querySelector('#addBookForm')
function openForm(){
    addBookForm.style.display = 'block';
    addBookForm.style.width = '300px';
    addBookForm.style.height = '400px';
}

function closeForm(){
    addBookForm.style.display = 'none';
}

addBookForm.addEventListener('submit', function(event){
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pageNum = document.querySelector('#pageNum').value;
    const isRead = document.querySelector('#read').checked;
    addBookToLibrary(title, author, pageNum, isRead);
    closeForm();
})

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);