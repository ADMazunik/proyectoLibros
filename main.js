let nombre = prompt("¿Cómo te llamas?") || "Extraño"


// Función para obtener número aleatorio
function randomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Función que obtiene un libro al azar de la categoría seleccionada por el usuario 
function fetchBooks(category) {
    fetch(`https://openlibrary.org/subjects/${category}.json`)
        .then((res) => res.json())
        .then((data) => {
            [...works] = data.works
            book = works[randomNumber(0, works.length)]
            alert(`Quizás te interesa el libro: \n${book.title}\nEscrito por ${book.authors[0].name}`)
            recomendar()
        })
        .catch((err) => {
            alert("Ha ocurrido un problema, intenta de nuevo más tarde")
            console.log(err)
        })
}

function recomendar() {
    let categoria = parseInt(prompt(`Hola ${nombre}, por favor selecciona una categoría utilizando el número correspondiente:    
    1. Terror
    2. Fantasía
    3. Misterio`))

    switch (categoria) {
        case 1:
            fetchBooks("horror")
            break
        case 2:
            fetchBooks("fantasy")
            break
        case 3:
            fetchBooks("mystery_and_detective_stories")
            break
        default: recomendar()
    }
}

recomendar()