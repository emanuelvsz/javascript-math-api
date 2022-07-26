const app = require('./routes')

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Servidor ouvindo a porta: ${PORT}`);
})

