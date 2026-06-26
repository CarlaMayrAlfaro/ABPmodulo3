// LECCIÓN 4 - FUNCIONES


// Función para sumar calorías
function sumarCalorias(desayuno, almuerzo) {
    return desayuno + almuerzo;
}

// Función para calcular el promedio
function calcularPromedio(desayuno, almuerzo) {
    return (desayuno + almuerzo) / 2;
}

// Función para calcular el porcentaje respecto a una meta de 1000 kcal
function calcularPorcentaje(totalCalorias) {
    return (totalCalorias * 100) / 1000;
}

// Función principal
function calcularNutricion() {

    // Obtener los datos del HTML
    let desayuno = Number(document.getElementById("desayuno").value);
    let almuerzo = Number(document.getElementById("almuerzo").value);

    // Validar datos
    if (isNaN(desayuno) || isNaN(almuerzo) || desayuno < 0 || almuerzo < 0) {

        alert("Ingresa valores válidos.");

        return;

    }

    // Llamar funciones
    let total = sumarCalorias(desayuno, almuerzo);

    let promedio = calcularPromedio(desayuno, almuerzo);

    let porcentaje = calcularPorcentaje(total);

    // Mostrar resultados
    document.getElementById("totalCalorias").innerHTML =

        "<h3>Resultado</h3>" +

        ">Calorías totales: " + total + " kcal<br>" +

        ">Promedio: " + promedio + " kcal<br>" +

        ">Porcentaje de la meta diaria de 1000 kcal entre desayuno y almuerzo: " +

        porcentaje.toFixed(1) + " %";

}