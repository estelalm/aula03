'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const total = numero1 + numero2

    const resultado = document.getElementById('resultado')
    resultado.textContent = total
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

////////////////////////////////////////////////////////////
///questão d
const botaoMedia = document.getElementById('avaliar')

function media(){

    const n1 = Number(document.getElementById('nota1').value)
    const n2 = Number(document.getElementById('nota2').value)
    const n3 = Number(document.getElementById('nota3').value)
    const n4 = Number(document.getElementById('nota4').value)
    const n5 = Number(document.getElementById('nota5').value)

    const mediaResultado = document.getElementById('media')
    const status = document.getElementById('status')
    const notaExame = document.getElementById('nota5')
    const exameDiv = document.getElementById('div_exame')

    if(botaoMedia.textContent === 'Reavaliar'){

        const resultado = (n1+n2+n3+n4+n5)/5
        mediaResultado.textContent = resultado
        
        if(resultado < 7){
            status.textContent = 'Reprovado'
            botaoMedia.textContent = 'Avaliar'
        }else{
            status.textContent = 'Aprovado por exame!'
        }

    }else{

        const resultado = (n1+n2+n3+n4)/4
        mediaResultado.textContent = resultado

        if(resultado < 7){
            status.textContent = 'Em exame'
            exameDiv.classList.remove('exame')
            botaoMedia.textContent = 'Reavaliar'
        }else{
            status.textContent = 'Aprovado!'
            exameDiv.classList.add('exame')
        }
        
    }
  
}

botaoMedia.addEventListener('click', media)

//////////////////////////////////
////////questão f

