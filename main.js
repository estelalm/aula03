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
        mediaResultado.textContent = `Média:   ${resultado}`
        
        if(resultado < 7){
            status.textContent = 'Reprovado'
            botaoMedia.textContent = 'Avaliar'
        }else{
            status.textContent = 'Aprovado por exame!'
        }

    }else{

        const resultado = (n1+n2+n3+n4)/4
        mediaResultado.textContent = `Média:   ${resultado}`

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


const botaoOrganizar = document.getElementById('organizar')

function organizar(){
    
    const v1 = Number(document.getElementById('valor1').value)
    const v2 = Number(document.getElementById('valor2').value)
    const v3 = Number(document.getElementById('valor3').value)
    
    const maior = document.getElementById('valor-maior')
    const meio = document.getElementById('valor-meio')
    const menor = document.getElementById('valor-menor')

    if(v1 > v2 && v1 > v3){
        maior.textContent = v1
    }else if(v1 > v2 && v1 <v3){
        meio.textContent = v1
    }else if(v1 > v3 && v1 <v2){
        meio.textContent = v1
    }else if(v1 < v2 && v1 <v3){
        menor.textContent = v1
    }
    if(v2 > v1 && v2 > v3){
        maior.textContent = v2
    }else if(v2 > v1 && v2 <v3){
        meio.textContent = v2
    }else if(v2 > v3 && v2 <v1){
        meio.textContent = v2
    }else if(v2 < v1 && v2 <v3){
        menor.textContent = v2
    }
    if(v3 > v1 && v3 > v2){
        maior.textContent = v3
    }else if(v3 > v1 && v3 <v2){
        meio.textContent = v3
    }else if(v3 > v2 && v3 <v1){
        meio.textContent = v3
    }else if(v3 < v1 && v3 <v2){
        menor.textContent = v3
    }

}

botaoOrganizar.addEventListener('click', organizar)

/////////////////////
///// exercício o

const botaoMultiplicar = document.getElementById('multiplicar')

function multiplicar(){

    const v1 = Number(document.getElementById('valor1-30').value)
    const v2 = Number(document.getElementById('valor2-30').value)
    const produto = document.getElementById('produto')
    const resultado = v1*v2

    if(resultado > 30){
        produto. textContent = resultado + ' > 30'
    }else{
        produto.textContent = 'Sem resultado pra você.'
    }
}

botaoMultiplicar.addEventListener('click', multiplicar)