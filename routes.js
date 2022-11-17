const express = require('express');
const app = express();

const multiplicacao = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }else{
        return num1 * num2;
    }
}

const divisao = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }else{
        return num1 / num2;
    }
}

const subtracao = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }else{
        return num1 - num2;
    }
}

const soma = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }else{
        return num1 + num2;
    }
}

app.get('/multiplicacao/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    resultado = multiplicacao(numeroUm, numeroDois)

    if(resultado == undefined){
        return rest.status(400).send('Erro, corrige ai maluco')
    }
    rest.status(200).json({ resultado: resultado})
})

app.get('/divisao/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    resultado = divisao(numeroUm, numeroDois)

    if(resultado == undefined){
        return rest.status(400).send('Deu erro, corrija o quanto antes')
    }
    
    rest.status(200).json({ resultado: resultado})
})

app.get('/soma/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    resultado = soma(numeroUm, numeroDois)

    if(resultado == undefined){
        return rest.status(400).send('Deu errado, cara')
    }
    
    rest.status(200).json({ resultado: resultado})
})

app.get('/subtracao/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    resultado = subtracao(numeroUm, numeroDois)

    if(resultado == undefined){
        return rest.status(400).send('Deu errado, cara')
    }
    
    rest.status(200).json({ resultado: resultado})
})

module.exports = {app: app, multiplicar: multiplicacao, dividir: divisao, somar: soma, subtrair: subtracao} ;
