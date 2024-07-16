document.addEventListener('DOMContentLoaded', function () {
  const imcForm = document.getElementById('imcForm');
  imcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100;
    const imc = peso / (altura * altura);

    mostrarResultado(imc);
  });

  function mostrarResultado(imc) {
    let resultado = '';

    if (imc < 18.5) {
      resultado = `Tu IMC es ${imc.toFixed(1)} (Peso inferior al normal)`;
    } else if (imc >= 18.5 && imc < 25) {
      resultado = `Tu IMC es ${imc.toFixed(1)} (Peso normal)`;
    } else if (imc >= 25 && imc < 30) {
      resultado = `Tu IMC es ${imc.toFixed(1)} (Sobrepeso)`;
    } else {
      resultado = `Tu IMC es ${imc.toFixed(1)} (Obesidad)`;
    }

    document.getElementById('resultado').innerHTML = resultado;
  }
});

//  js divisas
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
    document.getElementById('cambio').innerHTML = resultado
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
    let notaHTML = `
      <div class="nota">
        <h2>${nota.titulo}</h2>
        <p>${nota.texto}</p>
        <p>Realizada: <input type="checkbox" ${nota.realizada ? 'checked' : ''} onchange="marcarRealizada(${nota.id})"></p>
        <button onclick="borrarNota(${nota.id})">Borrar Nota</button>
      </div>
    `;
    contenedorNotas.innerHTML += notaHTML;
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

  

  pintarNotas(notas);
});


inner