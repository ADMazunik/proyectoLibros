let nombre = prompt("¿Cómo te llamas?") || "Extraño"

const librosFantasia = [
    {
        "title": "Alice's Adventures in Wonderland",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ]
    },
    {
        "title": "Treasure Island",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ]
    },
    {
        "title": "Gulliver's Travels",
        "authors": [
            {
                "key": "/authors/OL24522A",
                "name": "Jonathan Swift"
            }
        ]
    },
    {
        "title": "Through the Looking-Glass",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ]
    },
    {
        "title": "The Wonderful Wizard of Oz",
        "authors": [
            {
                "key": "/authors/OL9348793A",
                "name": "L. Frank Baum"
            }
        ]
    },
    {
        "title": "The Lost World",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "A Midsummer Night's Dream",
        "authors": [
            {
                "key": "/authors/OL9388A",
                "name": "William Shakespeare"
            }
        ]
    },
    {
        "title": "The Prince",
        "authors": [
            {
                "key": "/authors/OL23135A",
                "name": "Niccolò Machiavelli"
            }
        ]
    },
    {
        "title": "Five Children and It",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ]
    },
    {
        "title": "Alice's Adventures in Wonderland / Through the Looking Glass",
        "authors": [
            {
                "key": "/authors/OL22098A",
                "name": "Lewis Carroll"
            }
        ]
    },
    {
        "title": "Le avventure di Pinocchio",
        "authors": [
            {
                "key": "/authors/OL162098A",
                "name": "Carlo Collodi"
            }
        ]
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ]
    },
    {
        "title": "A Study in Scarlet",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "The Adventures of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "The Sign of Four",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
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
        ]
    },
    {
        "title": "The Return of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "Memoirs of Sherlock Holmes [11 stories]",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ]
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ]
    },
    {
        "title": "The Invisible Man",
        "authors": [
            {
                "key": "/authors/OL13066A",
                "name": "H. G. Wells"
            }
        ]
    },
    {
        "title": "The Case-Book of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
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
        ]
    },
    {
        "title": "The Secret Agent",
        "authors": [
            {
                "key": "/authors/OL19441A",
                "name": "Joseph Conrad"
            }
        ]
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
        ]
    },
    {
        "title": "The Adventures of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "The Sign of Four",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
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
        ]
    },
    {
        "title": "The Return of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "Memoirs of Sherlock Holmes [11 stories]",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "The Story of the Amulet",
        "authors": [
            {
                "key": "/authors/OL18053A",
                "name": "Edith Nesbit"
            }
        ]
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ]
    },
    {
        "title": "The Invisible Man",
        "authors": [
            {
                "key": "/authors/OL13066A",
                "name": "H. G. Wells"
            }
        ]
    },
    {
        "title": "The Case-Book of Sherlock Holmes",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
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
        ]
    },
    {
        "title": "The Secret Agent",
        "authors": [
            {
                "key": "/authors/OL19441A",
                "name": "Joseph Conrad"
            }
        ]
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
        ]
    },
    {
        "title": "Dracula",
        "authors": [
            {
                "key": "/authors/OL31727A",
                "name": "Bram Stoker"
            }
        ]
    },
    {
        "title": "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "authors": [
            {
                "key": "/authors/OL25963A",
                "name": "Robert Louis Stevenson"
            }
        ]
    },
    {
        "title": "Carmilla",
        "authors": [
            {
                "key": "/authors/OL440124A",
                "name": "Joseph Sheridan Le Fanu"
            }
        ]
    },
    {
        "title": "The Great God Pan",
        "authors": [
            {
                "key": "/authors/OL554155A",
                "name": "Arthur Machen"
            }
        ]
    },
    {
        "title": "Tales of Terror and Mystery",
        "authors": [
            {
                "key": "/authors/OL161167A",
                "name": "Arthur Conan Doyle"
            }
        ]
    },
    {
        "title": "Brood of the Witch-Queen",
        "authors": [
            {
                "key": "/authors/OL300813A",
                "name": "Sax Rohmer"
            }
        ]
    },
    {
        "title": "The Damned",
        "authors": [
            {
                "key": "/authors/OL394726A",
                "name": "Algernon Blackwood"
            }
        ]
    },
    {
        "title": "Carrie",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ]
    },
    {
        "title": "The Shining",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ]
    },
    {
        "title": "Misery",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ]
    },
    {
        "title": "Skeleton Crew",
        "authors": [
            {
                "key": "/authors/OL2162284A",
                "name": "Stephen King"
            }
        ]
    }
]

// Función para obtener número aleatorio
function randomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Función que obtiene un libro al azar de la categoría seleccionada por el usuario
function showBooks(category) {
  number = randomNumber(0, category.length - 1)
  console.log(category)
  selectedBook = category[number]
  alert(`Te recomiendo el libro\n${selectedBook.title}\nEscrito por ${selectedBook.authors[0].name}`)
  recomendar()
}


function recomendar() {
    let categoria = parseInt(prompt(`Hola ${nombre}, por favor selecciona una categoría utilizando el número correspondiente:    
    1. Terror
    2. Fantasía
    3. Misterio`))

    switch (categoria) {
        case 1:
            showBooks(librosHorror)
            break
        case 2:
            showBooks(librosFantasia)
            break
        case 3:
            showBooks(librosMisterio)
            break
        default: recomendar()
    }
}

recomendar()