// LECCIÓN 5 - OBJETOS


// Arreglo de objetos
const alimentosInfo = [

    {
        nombre: "Manzana",
        calorias: 52,
        categoria: "Fruta",

        descripcion() {
            return this.nombre +
                " pertenece a la categoría " +
                this.categoria +
                " y aporta " +
                this.calorias +
                " kcal.";
        }
    },

    {
        nombre: "Brócoli",
        calorias: 34,
        categoria: "Verdura",

        descripcion() {
            return this.nombre +
                " pertenece a la categoría " +
                this.categoria +
                " y aporta " +
                this.calorias +
                " kcal.";
        }
    },

    {
        nombre: "Almendras",
        calorias: 90,
        categoria: "Fruto seco",

        descripcion() {
            return this.nombre +
                " pertenece a la categoría " +
                this.categoria +
                " y aporta " +
                this.calorias +
                " kcal.";
        }
    }

];

// Mapa de iconos (rutas relativas dentro del proyecto)
const iconosAlimentos = {
    "Manzana": "assets/img/icons/apple.svg",
    "Brócoli": "assets/img/icons/broccoli.svg",
    "Almendras": "assets/img/icons/almonds.svg"
};


// CARGAR SELECT


function cargarSelectorAlimentos(){

    const selector = document.getElementById("alimentos");

    selector.innerHTML =
    "<option value=''>Seleccione un alimento</option>";

    alimentosInfo.forEach(function(alimento){

        selector.innerHTML +=
        `<option value="${alimento.nombre}">
            ${alimento.nombre}
        </option>`;

    });

}


// MOSTRAR BOTONES


function mostrarAlimentos5(){

    const lista = document.getElementById("listaAlimentos5");

    lista.innerHTML = "";

    alimentosInfo.forEach(function(alimento){

        lista.innerHTML +=

        `<button onclick="seleccionarAlimento('${alimento.nombre}')">

            ${alimento.nombre}

        </button><br>`;

    });

}


// SELECCIONAR


function seleccionarAlimento(nombre){

    document.getElementById("alimentos").value = nombre;

    mostrarDetalleAlimento();

}


// MOSTRAR DETALLE


function mostrarDetalleAlimento(){

    const nombre =
    document.getElementById("alimentos").value;

    if(nombre==""){

        alert("Selecciona un alimento.");

        return;

    }

    const alimento =
    alimentosInfo.find(function(item){

        return item.nombre===nombre;

    });

    document.getElementById("resultado5").innerHTML=

    "<div style='display:flex;align-items:center;gap:12px'>"+
    (iconosAlimentos[alimento.nombre] ? "<img src='"+iconosAlimentos[alimento.nombre]+"' alt='"+alimento.nombre+"' style='width:64px;height:64px;border-radius:8px'>" : "")+
    "<div>"+
    "<h3>"+alimento.nombre+"</h3>"+
    "<p>"+alimento.descripcion()+"</p>"+
    "</div>"+
    "</div>";

}


// MAP()


function obtenerNombres(){

    return alimentosInfo.map(function(alimento){

        return alimento.nombre;

    });

}


// INICIAR


window.onload=function(){

    cargarSelectorAlimentos();

    console.log("Alimentos disponibles:");

    console.log(obtenerNombres());

};