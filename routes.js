const express = require('express');
const app = express();

const soma = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return undefined;
    }else{
        return num1 + num2;
    }
}

app.get('/subtracao/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    if(isNaN(numeroUm) || isNaN(numeroDois)){rest.status(400).send('Desculpe, não podemos concluir a operação, envie um número')}
    rest.status(200).json({ resultado: numeroUm-numeroDois })
})

app.get('/multiplicacao/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    resultado = soma(numeroUm, numeroDois)

    

    if(resultado == undefined){
        return rest.status(400).send('Erro, corrige ai maluco')
    }
    
    rest.status(200).json({ resultado: resultado})

})

app.get('/soma/:numeroUm/:numeroDois', (requir, rest) => {
    const numeroUm = +requir.params.numeroUm
    const numeroDois = +requir.params.numeroDois

    if(isNaN(numeroUm) || isNaN(numeroDois)){rest.status(400).send('Desculpe, não podemos concluir a operação, envie um número')}
    rest.status(200).json({ resultado: numeroUm+numeroDois })
})

module.exports = {app: app, somar: soma} ;