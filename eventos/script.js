document.addEventListener('DOMContentLoaded', function () {

  const imcForm = document.getElementById('imcForm')
  imcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100
    const imc = peso / (altura * altura)

    mostrarResultado(imc)
  });

  function mostrarResultado(imc) {
    let resultado = ''

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
  }
})
  // js divisas
  const divisasForm = document.getElementById('divisas')
  divisasForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const dollar = parseFloat(document.getElementById('dollar').value)
    const tipoDeCambio = 16.00
    const pesosMexicanos = dollar * tipoDeCambio

    mostrarDivisas(pesosMexicanos)
  });

  function mostrarDivisas(pesosMexicanos) {
    const resultado = `Equivale a: ${pesosMexicanos.toFixed(2)} pesos Mexicanos`
    document.getElementById('cambio').textContent = resultado
  }

  // js block de notas
 // Declaración de variables globales
let notas = [];
let idGlobal = 2;

// Función para pintar las notas en el contenedor
function pintarNotas(notasAMostrar) {
  const contenedorNotas = document.getElementById('contenedorNotas');
  contenedorNotas.innerHTML = '';

  if (notasAMostrar.length === 0) {
    contenedorNotas.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
    return;
  }

  notasAMostrar.forEach(nota => {
    const divNota = document.createElement('div');
    divNota.classList.add('nota');

    const h2 = document.createElement('h2');
    h2.textContent = nota.titulo;

    const pTexto = document.createElement('p');
    pTexto.textContent = nota.texto;

    const pRealizada = document.createElement('p');
    pRealizada.textContent = 'Realizada: ';

    const checkboxRealizada = document.createElement('input');
    checkboxRealizada.type = 'checkbox';
    checkboxRealizada.checked = nota.realizada;
    checkboxRealizada.addEventListener('change', function() {
      marcarRealizada(nota.id);
    });

    const buttonBorrar = document.createElement('button');
    buttonBorrar.textContent = 'Borrar Nota';
    buttonBorrar.addEventListener('click', function() {
      borrarNota(nota.id);
    });

    pRealizada.appendChild(checkboxRealizada);
    divNota.appendChild(h2);
    divNota.appendChild(pTexto);
    divNota.appendChild(pRealizada);
    divNota.appendChild(buttonBorrar);

    contenedorNotas.appendChild(divNota);
  });
}

// Función para agregar una nueva nota
function agregarNota(titulo, texto) {
  idGlobal++;
  let nuevaNota = {
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false
  };
  notas.push(nuevaNota);
  pintarNotas(notas);
}

// Función para limpiar los campos de título y texto
function limpiarCampos() {
  document.getElementById('titulo').value = '';
  document.getElementById('texto').value = '';
}

// Función para borrar una nota
function borrarNota(id) {
  notas = notas.filter(nota => nota.id !== id);
  pintarNotas(notas);
}

// Función para marcar una nota como realizada o no realizada
function marcarRealizada(id) {
  let nota = notas.find(nota => nota.id === id);
  nota.realizada = !nota.realizada;
  pintarNotas(notas);
}

// Función para aplicar los filtros
function aplicarFiltros() {
  let textoFiltro = filtroTexto.value.trim().toLowerCase();
  let mostrarRealizadas = filtroRealizadas.checked;

  let notasFiltradas = notas.filter(nota => {
    const textoCoincide = nota.titulo.toLowerCase().includes(textoFiltro) ||
                          nota.texto.toLowerCase().includes(textoFiltro);

    const cumpleRealizada = mostrarRealizadas ? nota.realizada : true;

    return textoCoincide && cumpleRealizada;
  });

  pintarNotas(notasFiltradas);
}

// Configuración de event listeners
document.addEventListener('DOMContentLoaded', function() {
  const filtroTexto = document.getElementById('filtroTexto');
  const filtroRealizadas = document.getElementById('filtroRealizadas');

  filtroTexto.addEventListener('keyup', aplicarFiltros);
  filtroRealizadas.addEventListener('change', aplicarFiltros);

  const guardarNotaBtn = document.getElementById('guardarNota');
  guardarNotaBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;

    if (titulo.trim() === '' || texto.trim() === '') {
      alert('Por favor, completa el título y el texto de la nota.');
      return;
    }

    agregarNota(titulo, texto);
    limpiarCampos();
  });

  // Agregar notas de prueba
  notas.push({
    id: 1,
    titulo: 'Sacar la basura',
    texto: 'Mi mamá se va a cabrear si no lo hago',
    realizada: false
  });

  notas.push({
    id: 2,
    titulo: 'Ir al super',
    texto: 'Comprar leche, papel de baño, pasta dental, jabón, etc',
    realizada: false
  });

  pintarNotas(notas);
});


