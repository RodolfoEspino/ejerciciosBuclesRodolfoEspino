document.getElementById('imcForm').addEventListener('click', (e) => {
  e.preventDefault()

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100

  const imc = peso / (altura * altura)

  mostrarResultado(imc);
});

const mostrarResultado = (imc) => {
  let resultado = '';

  if (imc < 18.5) {
    resultado = `Tu IMC es ${imc.toFixed(1)} (Peso inferior al normal)`
  } else if (imc >= 18.5 && imc < 25) {
    resultado = `Tu IMC es ${imc.toFixed(1)} (Peso normal)`
  } else if (imc >= 25 && imc < 30) {
    resultado = `Tu IMC es ${imc.toFixed(1)} (Sobrepeso)`
  } else {
    resultado = `Tu IMC es ${imc.toFixed(1)} (Obesidad)`
  }

  document.getElementById('resultado').textContent = resultado
};


//   js cambio de divisas

document.getElementById('divisas').addEventListener("click", (e) => {
  e.preventDefault()

  const dollar = parseFloat(document.getElementById(`dollar`).value)
  const tipoDeCambio = 16.00

  const pesosMexicanos = dollar * tipoDeCambio

  laDivisa(pesosMexicanos)
})

const laDivisa = (pesosMexicanos) => {
  const resultado = `Equivale a: ${pesosMexicanos.toFixed(2)} pesos Mexicanos`

  document.getElementById("cambio").textContent = resultado
}

// js block de notas 

let notas = []

// b. Agregar un par de notas de prueba
notas.push({
  id: 1,
  titulo: 'Sacar la basura',
  texto: 'Mi mamá se va a cabrear si no lo hago',
  realizada: false
})
notas.push({
  id: 2,
  titulo: 'ir al super',
  texto: 'comprar leche, papel de baño, pasta dental, jabon, etc',
  realizada: false
})
// notas.push({
//   id: 3,
//   titulo: 'Sacar la basura',
//   texto: 'Mi mamá se va a cabrear si no lo hago',
//   realizada: false
// })
// notas.push({
//   id: 4,
//   titulo: 'Sacar la basura',
//   texto: 'Mi mamá se va a cabrear si no lo hago',
//   realizada: false
// })
// notas.push({
//   id: 5,
//   titulo: 'Sacar la basura',
//   texto: 'Mi mamá se va a cabrear si no lo hago',
//   realizada: false
// })
// notas.push({
//   id: 6,
//   titulo: 'Sacar la basura',
//   texto: 'Mi mamá se va a cabrear si no lo hago',
//   realizada: false
// })


//  variable global
let idGlobal = 2; // El último ID creado manualmente fue 2

const contenedorNotas = document.getElementById('contenedorNotas')

//Función para pintar las notas en forma de tarjetas dentro del contenedor
function pintarNotas() {
  contenedorNotas.innerHTML = ''

  if (notas.length === 0) {
    contenedorNotas.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>'
    return
  }

  notas.forEach(nota => {
    const notaHTML = `
      <div class="nota">
        <h2>${nota.titulo}</h2>
        <p>${nota.texto}</p>
        <p>Realizada: <input type="checkbox" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}></p>
        <button onclick="borrarNota(${nota.id})">Borrar Nota</button>
      </div>
    `;
    contenedorNotas.innerHTML += notaHTML
  });
}

// Función para agregar una nueva nota
function agregarNota(titulo, texto) {
  idGlobal++
  let nuevaNota = {
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false
  }
  notas.push(nuevaNota);
  pintarNotas()
}

// Función para guardar la nota desde la interfaz
function guardarNota() {
  let titulo = document.getElementById('titulo').value
  let texto = document.getElementById('texto').value

  if (titulo.trim() === '' || texto.trim() === '') {
    alert('Por favor, completa el título y el texto de la nota.')
    return
  }

  agregarNota(titulo, texto)
  limpiarCampos()
}

// Función para limpiar los campos de título y texto
function limpiarCampos() {
  document.getElementById('titulo').value = ''
  document.getElementById('texto').value = ''
}

// Función para borrar una nota por ID
function borrarNota(id) {
  notas = notas.filter(nota => nota.id !== id)
  pintarNotas()
}

// Función para marcar una nota como realizada o no realizada
function marcarRealizada(id) {
  let nota = notas.find(nota => nota.id === id)
  nota.realizada = !nota.realizada;
  pintarNotas()
}

// Función para aplicar los filtros de texto y realizadas
document.addEventListener('DOMContentLoaded', function () {
  let filtroTexto = ''
  let mostrarRealizadas = false

  const contenedorNotas = document.getElementById('contenedorNotas')

  // Función para aplicar los filtros
  function aplicarFiltros() {
    filtroTexto = document.getElementById('filtroTexto').value.trim().toLowerCase()

    mostrarRealizadas = document.getElementById('filtroRealizadas').checked

    let notasFiltradas = notas.filter(nota => {
      const textoCoincide = nota.titulo.toLowerCase().includes(filtroTexto) ||
        nota.texto.toLowerCase().includes(filtroTexto)

      const cumpleRealizada = mostrarRealizadas ? nota.realizada : true

      return textoCoincide && cumpleRealizada
    })

    mostrarNotas(notasFiltradas)
  }

  // Función para mostrar las notas en el contenedor
  function mostrarNotas(notasAMostrar) {
    contenedorNotas.innerHTML = ''
    if (notasAMostrar.length === 0) {
      contenedorNotas.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>'
      return
    }

    notasAMostrar.forEach(nota => {
      const notaHTML = `
        <div class="nota">
          <h2>${nota.titulo}</h2>
          <p>${nota.texto}</p>
          <p>Realizada: <input type="checkbox" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}></p>
          <button onclick="borrarNota(${nota.id})">Borrar Nota</button>
        </div>
      `
      contenedorNotas.innerHTML += notaHTML
    })
  }

  document.getElementById('filtroTexto').addEventListener('keyup', aplicarFiltros)

  document.getElementById('filtroRealizadas').addEventListener('change', aplicarFiltros)

  mostrarNotas(notas)
})




