const user = {
    name: "",
    booksHistorial: [],
    addBook: (book) => {
        user.booksHistorial.push(book)
    },
    clearHistorial: () => {
        user.booksHistorial = []
    }
}

const bookSelect = document.getElementById("bookSelect")
const bookForm = document.getElementById("bookForm")
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
        saveData("user", user)
    })
}

function recommendBook(e) {
    e.preventDefault()
    let selectedCategory = document.getElementById("genre").value
    switch (selectedCategory) {
        case "horror":
            showBooks(librosHorror)
            break
        case "fantasy":
            showBooks(librosFantasia)
            break
        case "mistery":
            showBooks(librosMisterio)
            break
    }
}

function showBooks(category) {
    number = getRandomNumber(0, category.length - 1)
    selectedBook = category[number]

    if (user.booksHistorial.findIndex((book) => book.id == selectedBook.id) !== -1) {
        showBooks(category)
    } else {
        if (user.booksHistorial.length >= 15) {
            renderErrorBooks()
        } else {
            user.addBook(selectedBook)
            saveData("user", user)
            renderSelection(selectedBook)
            bookForm.reset()
        }
    }
}

function renderSelection(book) {
    const bookMsg = document.createElement("div")
    bookMsg.classList.add("mt-5", "align-self-center", "book-msg")
    bookMsg.innerHTML = `
    <div class="card" style="width: 30rem;">
        <div class="card-body">
            <p class="card-text">Tal vez pueda interesarte</p>
            <h3 class="card-title fw-bold m-4">${book.title}</h3>
            <p class="card-text fs-5">Escrito por <span class="fw-bold">${book.authors[0].name}</span></p>
            <button id="closeSelectionCard" type="button" class="btn btn-success">¡Genial!</button>
        </div>
    </div>
    `
    const bookSearch = document.getElementById("bookSearchBtn")
    bookSearch.toggleAttribute("hidden")
    bookForm.appendChild(bookMsg)

    const closeSelectionCard = document.getElementById("closeSelectionCard")
    closeSelectionCard.addEventListener("click", () => {
        bookForm.removeChild(bookForm.lastChild)
        renderHistorial()
        bookSearch.toggleAttribute("hidden")
    })
}

function renderErrorBooks() {
    const errorBook = document.createElement("p")
    errorBook.classList.add("container", "bg-error", "mt-4", "py-3", "text-white", "fs-5", "fw-bold", "w-50")
    errorBook.innerText = "Has alcanzado el límite del historial."
    bookForm.appendChild(errorBook)
    setTimeout(() => {
        errorBook.remove()
    }, 1500);

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
                            <div class="card-body d-flex flex-column align-items-center justify-content-between gap-2">
                            <p class="card-title text-center fs-5">${book.title}</p>
                            </div>
                        </div>
                         `
        })
        historial.innerHTML = `
                            <h2 class="align-self-start">Historial <span class="fw-bold">(${user.booksHistorial.length})</span> </h2>    
                            <div class= "d-flex flex-wrap gap-3 container">${accumulator}</div>    
                           `
        clearHistorial(historialDiv)
    } else {
        historial.innerHTML = `<h2 class="mt-5 align-self-center">Historial Vacío</h2>`
    }
    historialDiv.appendChild(historial)
}

function clearHistorial(parentNode) {
    const clearHistorial = document.createElement("button")
    clearHistorial.classList.add("btn", "btn-danger", "m-3")
    clearHistorial.innerText = "Borrar Historial"
    clearHistorial.addEventListener("click", () => {
        user.clearHistorial()
        saveData("user", user)
        renderHistorial()
    })
    parentNode.appendChild(historial)
    historial.appendChild(clearHistorial)

}

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
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


const librosFantasia = [
    {
        "title": "Alice's Adventures in Wonderland",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ],
        "id": 57
    },
    {
        "title": "Treasure Island",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ],
        "id": 92
    },
    {
        "title": "Gulliver's Travels",
        "authors": [
            {
                "key": "/authors/OL24522A",
                "name": "Jonathan Swift"
            }
        ],
        "id": 9
    },
    {
        "title": "Through the Looking-Glass",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ],
        "id": 94
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "authors": [
            {
                "key": "/authors/OL9348793A",
                "name": "L. Frank Baum"
            }
        ],
        "id": 69
    },
    {
        "title": "The Lost World",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 8
    },
    {
        "title": "A Midsummer Night's Dream",
        "authors": [
            {
                "key": "/authors/OL9388A",
                "name": "William Shakespeare"
            }
        ],
        "id": 46
    },
    {
        "title": "The Prince",
        "authors": [
            {
                "key": "/authors/OL23135A",
                "name": "Niccolò Machiavelli"
            }
        ],
        "id": 33
    },
    {
        "title": "Five Children and It",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ],
        "id": 58
    },
    {
        "title": "Alice's Adventures in Wonderland / Through the Looking Glass",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ],
        "id": 13
    },
    {
        "title": "Le avventure di Pinocchio",
        "authors": [
            {
                "key": "/authors/OL162098A",
                "name": "Carlo Collodi"
            }
        ],
        "id": 16
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ],
        "id": 22
    },
    {
        "title": "A Study in Scarlet",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 29
    },
    {
        "title": "The Adventures of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 86
    },
    {
        "title": "The Sign of Four",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 44
    },
    {
        "title": "The Moonstone",
        "authors": [
            {
                "key": "/authors/OL22358A",
                "name": "Wilkie Collins"
            },
            {
                "key": "/authors/OL2453739A",
                "name": "Pieter Koster"
            },
            {
                "key": "/authors/OL540361A",
                "name": "Sandra Kemp"
            },
            {
                "key": "/authors/OL8349355A",
                "name": "Andronum"
            }
        ],
        "id": 94
    },
    {
        "title": "The Return of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 1
    },
    {
        "title": "Memoirs of Sherlock Holmes [11 stories]",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 10
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ],
        "id": 97
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ],
        "id": 53
    },
    {
        "title": "The Invisible Man",
        "authors": [
            {
                "key": "/authors/OL13066A",
                "name": "H. G. Wells"
            }
        ],
        "id": 75
    },
    {
        "title": "The Case-Book of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 68
    },
    {
        "title": "Tom Sawyer, Detective",
        "authors": [
            {
                "key": "/authors/OL18319A",
                "name": "Mark Twain"
            },
            {
                "key": "/authors/OL2865718A",
                "name": "Grover Gardner"
            },
            {
                "key": "/authors/OL9213496A",
                "name": "Professor Grover Gardner"
            }
        ],
        "id": 43
    },
    {
        "title": "The Secret Agent",
        "authors": [
            {
                "key": "/authors/OL19441A",
                "name": "Joseph Conrad"
            }
        ],
        "id": 26
    }
]
const librosMisterio = [
    {
        "title": "A Study in Scarlet",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 146
    },
    {
        "title": "The Adventures of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 179
    },
    {
        "title": "The Sign of Four",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 101
    },
    {
        "title": "The Moonstone",
        "authors": [
            {
                "key": "/authors/OL22358A",
                "name": "Wilkie Collins"
            },
            {
                "key": "/authors/OL2453739A",
                "name": "Pieter Koster"
            },
            {
                "key": "/authors/OL540361A",
                "name": "Sandra Kemp"
            },
            {
                "key": "/authors/OL8349355A",
                "name": "Andronum"
            }
        ],
        "id": 183
    },
    {
        "title": "The Return of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 174
    },
    {
        "title": "Memoirs of Sherlock Holmes [11 stories]",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 160
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ],
        "id": 115
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ],
        "id": 137
    },
    {
        "title": "The Invisible Man",
        "authors": [
            {
                "key": "/authors/OL13066A",
                "name": "H. G. Wells"
            }
        ],
        "id": 168
    },
    {
        "title": "The Case-Book of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 139
    },
    {
        "title": "Tom Sawyer, Detective",
        "authors": [
            {
                "key": "/authors/OL18319A",
                "name": "Mark Twain"
            },
            {
                "key": "/authors/OL2865718A",
                "name": "Grover Gardner"
            },
            {
                "key": "/authors/OL9213496A",
                "name": "Professor Grover Gardner"
            }
        ],
        "id": 129
    },
    {
        "title": "The Secret Agent",
        "authors": [
            {
                "key": "/authors/OL19441A",
                "name": "Joseph Conrad"
            }
        ],
        "id": 120
    }
]
const librosHorror = [
    {
        "title": "The Picture of Dorian Gray",
        "authors": [
            {
                "key": "/authors/OL20646A",
                "name": "Oscar Wilde"
            }
        ],
        "id": 240
    },
    {
        "title": "Dracula",
        "authors": [
            {
                "key": "/authors/OL31727A",
                "name": "Bram Stoker"
            }
        ],
        "id": 202
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ],
        "id": 239
    },
    {
        "title": "Carmilla",
        "authors": [
            {
                "key": "/authors/OL440124A",
                "name": "Joseph Sheridan Le Fanu"
            }
        ],
        "id": 219
    },
    {
        "title": "The Great God Pan",
        "authors": [
            {
                "key": "/authors/OL554155A",
                "name": "Arthur Machen"
            }
        ],
        "id": 284
    },
    {
        "title": "Tales of Terror and Mystery",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ],
        "id": 223
    },
    {
        "title": "Brood of the Witch-Queen",
        "authors": [
            {
                "key": "/authors/OL300813A",
                "name": "Sax Rohmer"
            }
        ],
        "id": 280
    },
    {
        "title": "The Damned",
        "authors": [
            {
                "key": "/authors/OL394726A",
                "name": "Algernon Blackwood"
            }
        ],
        "id": 251
    },
    {
        "title": "Carrie",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ],
        "id": 220
    },
    {
        "title": "The Shining",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ],
        "id": 246
    },
    {
        "title": "Misery",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ],
        "id": 289
    },
    {
        "title": "Skeleton Crew",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ],
        "id": 264
    }
]