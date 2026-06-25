// ======================================
// LECCIÓN 3 - ARREGLOS Y CICLOS
// ======================================

// Arreglo con alimentos saludables
const listaAlimentos = [
    "Manzana",
    "Plátano",
    "Naranja",
    "Brócoli",
    "Almendras",
    "Yogur"
];

// Mostrar todos los alimentos usando FOR
function mostrarAlimentos() {

    let resultado = "<h3>Lista de alimentos</h3>";

    for (let i = 0; i < listaAlimentos.length; i++) {

        resultado += "• " + listaAlimentos[i] + "<br>";

    }

    document.getElementById("resultado").innerHTML = resultado;

}

// Mostrar solo las frutas usando WHILE
function mostrarFrutas() {

    const frutas = [
        "Manzana",
        "Plátano",
        "Naranja"
    ];

    let resultado = "<h3>Frutas</h3>";

    let i = 0;

    while (i < frutas.length) {

        resultado += "• " + frutas[i] + "<br>";

        i++;

    }

    document.getElementById("resultado").innerHTML = resultado;

}

// Función que filtra alimentos según una condición
function filtrarAlimentos(textoBuscar) {

    return listaAlimentos.filter(function(alimento){

        return alimento.toLowerCase().includes(textoBuscar.toLowerCase());

    });

}