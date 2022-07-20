const express = require('express');
const app = express();

const PORT = 8000

    app.get('/soma/:numeroUm/:numeroDois', (requir, rest) => {
        const numeroUm = +requir.params.numeroUm
        const numeroDois = +requir.params.numeroDois
        if(isNaN(numeroUm) || isNaN(numeroDois)){rest.status(400).send('Desculpe, não podemos concluir a operação, envie um número no pedido')}
        rest.status(200).json({ resultado: numeroUm+numeroDois })
})

    app.listen(PORT, () => {
    console.log(`Servidor ouvindo a porta: ${PORT}`);
})