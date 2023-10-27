const user = {
    name: "",
    booksHistorial: [],
    addBook: (book) => {
        user.booksHistorial.push(book)
    },
    deleteBook: (book) => {
        const i = user.booksHistorial.indexOf(book)
        user.booksHistorial.splice(i, 1)
    },
    clearHistorial: () => {
        user.booksHistorial = []
    }
}

const bookSelect = document.getElementById("bookSelect")
const bookForm = document.getElementById("bookForm")
const searchBtn = document.getElementById("bookSearchBtn")
bookForm.addEventListener('submit', recommendBook)

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createUser() {
    const main = document.getElementById("main")
    const popUp = document.createElement("div")
    popUp.innerHTML = `
            <div class="bg-popUp">
                <div class="d-flex flex-column justify-content-center align-items-center gap-2 mt-3 p-5 name-popUp">
                    <h2 class="text-dark mb-4 fw-bold">Bienvenido/a, ¿Cómo te llamas?</h2>
                    <div class="d-flex flex-column gap-2 p-2">
                        <input id="usernameInput" class="text-center fs-4"  type="text" value="Invitado">
                        <button id="nameButton" class="btn btn-success align-self-center fw-bold px-4" type="button">Usar este nombre</button>
                    </div>
                </div>
            </div>
         `
    main.insertBefore(popUp, main.firstChild)
    bookSelect.classList.toggle("blur")

    document.getElementById("nameButton").addEventListener("click", () => {
        newName = document.getElementById("usernameInput").value
        bookSelect.classList.toggle("blur")
        popUp.remove()
        user.name = newName
        saveData()
    })
}

function recommendBook(e) {
    e.preventDefault()
    searchBtn.innerHTML = `
                            <div class="spinner-border mt-3 align-self-center" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            `
    let selectedCategory = document.getElementById("genre").value
    switch (selectedCategory) {
        case "horror":
            fetchBooks("horror")
            break
        case "fantasy":
            fetchBooks("fantasy")
            break
        case "mistery":
            fetchBooks("mystery_and_detective_stories")
            break
        case "historicalFiction":
            fetchBooks("historical_fiction")
            break
        case "poetry":
            fetchBooks("poetry")
            break
        case "romance":
            fetchBooks("romance")
            break
        default:
            searchBtn.innerHTML = "Buscar Libro"
    }
}

function showBooks(books) {
    number = getRandomNumber(0, books.length - 1)
    selectedBook = books[number]

    if (user.booksHistorial.findIndex((book) => book.cover_id == selectedBook.cover_id) !== -1) {
        showBooks(books)
    } else {
        if (user.booksHistorial.length >= 10) {
            renderErrorBooks()
        } else {
            user.addBook(selectedBook)
            saveData()
            renderSelection(selectedBook)
            bookForm.reset()
        }
    }
}

function renderSelection(book) {
    Swal.fire({
        titleText: `${book.title}`,
        text: `Escrito por ${book.authors[0].name}`,
        imageUrl: `https://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg`,
        imageAlt: `${book.title}`,
        background: "#ffdaa2",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: true,
        confirmButtonText: "¡Genial!"
    }).then(() => {
        searchBtn.innerText = "Buscar Libro"
        renderHistorial()
    })
}

function renderErrorBooks() {
    Swal.fire({
        icon: 'error',
        title: 'Has alcanzado el límite de recomendaciones',
        text: 'Borra alguna para continuar',
        background: "#ffdaa2",
    }).then(() => {
        searchBtn.innerText = "Buscar Libro"
    })
}

function renderHistorial() {
    const historialDiv = document.getElementById("historial")
    historialDiv.replaceChildren()
    historial = document.createElement("div")
    historial.classList.add("d-flex", "flex-column",)
    if (user.booksHistorial.length > 0) {
        let accumulator = ``
        user.booksHistorial.forEach((book) => {
            accumulator += ` 
                        <div class="card text-center bg-historial">
                        <div id=${book.cover_id}  class="m-1 btn btn-sm btn-deleteBook align-self-start text-light">X
                        </div>
                        <div class="card-body d-flex flex-column align-items-center justify-content-center gap-2">
                                <img  src="https://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg" alt="${book.title}" />
                                <p class="mt-3 card-title text-center fs-5 fw-bold">${book.title}</p>
                            </div>
                        </div>
                         `
            setTimeout(() => {
                const { cover_id } = book
                document.getElementById(cover_id).addEventListener("click", () => {
                    deleteBook(book)
                })
            }, 0)
        })
        historial.innerHTML = `
                            <h2 class="align-self-start font-tangerine fs-1">Mis Recomendaciones <span class="fw-bold">(${user.booksHistorial.length})</span> </h2>    
                            <div class= "d-flex flex-wrap gap-3 container">${accumulator}</div>    
                           `

        clearHistorial(historialDiv)
    } else {
        historial.innerHTML = `<h2 class="mt-5 align-self-center">No tienes recomendaciones guardadas</h2>`
    }
    historialDiv.appendChild(historial)
}

function deleteBook(book) {
    user.deleteBook(book)
    saveData()
    renderHistorial()
}

function clearHistorial(parentNode) {
    const clearHistorial = document.createElement("button")
    clearHistorial.classList.add("btn", "btn-deleteHistorial", "m-3", "fs-3", "text-center")
    clearHistorial.innerText = "Borrar Recomendaciones"
    clearHistorial.addEventListener("click", () => {
        user.clearHistorial()
        saveData()
        renderHistorial()
    })
    parentNode.appendChild(historial)
    historial.appendChild(clearHistorial)

}

function saveData() {
    localStorage.setItem("user", JSON.stringify(user))
}

window.addEventListener('DOMContentLoaded', () => {
    dataLoad = JSON.parse(localStorage.getItem("user"))
    if (dataLoad !== null) {
        user.name = dataLoad.name
        user.booksHistorial = dataLoad.booksHistorial
    } else {
        createUser()
    }
    renderHistorial()
})

function fetchBooks(category) {
    fetch(`https://openlibrary.org/subjects/${category}.json`)
        .then((res) => res.json())
        .then((data) => {
            [...works] = data.works
            showBooks(works)
        })
        .catch((err) => {
            alert("Ha ocurrido un problema, intenta de nuevo más tarde")
            console.log(err)
        })
}