const express = require('express')

//Criando servidor e executando na porta 3000
const app = express()
app.listen(3000, () => console.log("Servidor rodando na porta 3000..."))

//Primeira rota de teste
app.get('/', (req, res) => res.send('Servidor rodando, tudo ok'))