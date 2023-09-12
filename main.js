let nombre = prompt("¿Cómo te llamas?")
if (nombre == "") { nombre = "extraño" }
let seleccion = true

while (seleccion == true) {
    recomendar()
    let opcionContinuar = parseInt(prompt("¿Quieres que te recomiende otro libro?\n" + "1. SI\n" + "2. NO"))
    if (opcionContinuar != 1) { seleccion = false }
}

function recomendar() {
    let categoria = parseInt(prompt(`Hola ${nombre}, por favor selecciona una categoría utilizando el número correspondiente:    
    1. Terror
    2. Fantasía
    3. Misterio`))

    switch (categoria) {
        case 1: alert("Tal vez te pueda interesar el libro 'CUJO', escrito por Stephen King, de 393 páginas.")
            break;
        case 2: alert("Tal vez te pueda interesar el libro 'MATILDA' escrito por Roald Dahl, de 225 páginas.")
            break;
        case 3: alert("Tal vez te pueda interesar el libro 'ASESINATO PARA PRINCIPIANTES', escrito por Holly Jackson , de 432 páginas.")
            break;
        default: recomendar()
    }
}

