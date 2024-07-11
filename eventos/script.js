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

document.getElementById(divisas).addEventListener("click", (e) => {
    e.preventDefault()

    const dollar = parseFloat(document.getElementById(`dolar`).value)
    const tipoDeCambio = 16.00 

    const pesosMexicanos = dollar * tipoDeCambio

    laDivisa(pesosMexicanos)
})

const laDivisa = (pesosMexicanos) => {
    const resultado = `equivale a: $${pesosMexicanos.toFixed(2)}`

    document.getElementById("cambio").textContent = resultado
}
  