// PASO 1: Creamos el arreglo de objetos con la información de los pioneros
const listaInformaticos = [
    {
        nombre: "Ada Lovelace",
        especialidad: "Primera programadora",
        descripcion: "Escribió el primer algoritmo pensado para una máquina, la Máquina Analítica de Babbage.",
        foto: "img/I1.jpg"
    },
    {
        nombre: "Alan Turing",
        especialidad: "Teoría de la computación",
        descripcion: "Padre de la informática teórica y de la inteligencia artificial; creó la Máquina de Turing.",
        foto: "img/I2.jpg"
    },
    {
        nombre: "Grace Hopper",
        especialidad: "Lenguajes de programación",
        descripcion: "Desarrolló el primer compilador y fue clave en la creación del lenguaje COBOL.",
        foto: "img/I3.jpg"
    },
    {
        nombre: "Tim Berners-Lee",
        especialidad: "World Wide Web",
        descripcion: "Inventó la Web, el protocolo HTTP y el lenguaje HTML.",
        foto: "img/I4.jpg"
    },
    {
        nombre: "Linus Torvalds",
        especialidad: "Sistemas operativos",
        descripcion: "Creador del kernel Linux y de Git, el sistema de control de versiones.",
        foto: "img/I5.jpg"
    },
    {
        nombre: "Bill Gates",
        especialidad: "Software y empresa",
        descripcion: "Cofundador de Microsoft, impulsor de la computadora personal y del software de escritorio.",
        foto: "img/I6.jpg"
    }
];

// PASO 2: Capturar el contenedor del HTML usando getElementById() del DOM
const contenedor = document.getElementById("contenedor-informaticos");

// Paso 3: Creamos la función para recorrer el arreglo
function mostrarDirectorio() {

    listaInformaticos.forEach(informatico => {

        // Creamos un elemento DIV desde cero en la memoria de JS
        const tarjeta = document.createElement("div");

        // Le asignamos la clase CSS para que tome los estilos
        tarjeta.classList.add("tarjeta-informatico");

        // Agregamos la estructura HTML con los datos dinámicos del objeto
        tarjeta.innerHTML = `
            <img src="${informatico.foto}" alt="${informatico.nombre}">
            <h3>${informatico.nombre}</h3>
            <p class="especialidad">${informatico.especialidad}</p>
            <p>${informatico.descripcion}</p>
        `;

        // Introducimos la tarjeta recién creada dentro del contenedor real de la página
        contenedor.appendChild(tarjeta);
    });
}

// Se ejecuta la función para que se muestre al cargar la pantalla
mostrarDirectorio();
