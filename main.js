'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const total = numero1 + numero2;

    const resultado = document.getElementById('resultado')
    resultado.value = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if(numero > 0) {
        resultado.textContent = 'POSITIVO'
    }else if(numero < 0){
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)