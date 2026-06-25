console.log("Calculadora de Calorías");

// Constante
const metaCalorias = 1000;
const promedioCalorias = 500;
const porcentajeCalorias = 100;

// Solicitar datos al usuario
let desayuno = Number(prompt("¿Cuántas calorías consumiste en el desayuno?"));
let almuerzo = Number(prompt("¿Cuántas calorías consumiste en el almuerzo?"));

// Operaciones matemáticas
let totalCalorias = desayuno + almuerzo;
let diferencia = totalCalorias - metaCalorias;
let multiplicacion = (desayuno + almuerzo) * 100 / 1000;
let promedio = totalCalorias / 2;

// Mostrar resultados
console.log("Calorías totales: " + totalCalorias);
console.log("Diferencia de calorías: " + diferencia);
console.log("Multiplicación: " + multiplicacion);
console.log("Promedio de calorías: " + promedio);

// Estructura if - else
if (totalCalorias >= metaCalorias) {
    alert("Has alcanzado o superado la meta diaria de 1000 calorías.");
} else {
    alert("Aún no alcanzas la meta diaria de al menos 1000 kcal.");
}

if (promedio >= promedioCalorias) {
    alert("Tienes un promedio de calorías por tiempo de comida por encima de 500 kcal.");
} else {
    alert("Tienes un promedio de calorías por tiempo de comida por debajo de 500 kcal.");
}

    if (multiplicacion >= porcentajeCalorias) {
    alert("Consumes un " + multiplicacion + " % de un total de 1000 kcal recomendadas.");
} else {
    alert("Consumes un " + multiplicacion + " % de un total de 1000 kcal recomendadas.");
}

// Estructura switch
let comida = prompt(
    "Selecciona una comida (escribe solo el número):\n1. Frutas\n2. Verduras\n3. Frutos secos"
);

switch (comida) {
    case "1":
        alert("Las frutas aportan vitaminas y fibra.");
        break;
    case "2":
        alert("Las verduras aportan vitaminas y minerales.");
        break;
    case "3":
        alert("Los frutos secos aportan grasas saludables.");
        break;
    default:
        alert("Opción no válida.");
}

console.log("Programa finalizado.");