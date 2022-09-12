const express = require('express')
const app = express()
app.use(express.json())

const usuarios = {}

app.get('/rede/usuarios',(req, res) => {
    res.status(200).send(usuarios)
})


app.listen(5000, () => console.log('Usuarios. Porta 5000'))