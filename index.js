const express = require('express')
const app = express()
app.use(express.json())

const usuarios = []
let userId = 0;

//get all users endpoint
app.get('/rede/usuarios', (req, res) => {
    res.status(200).send(usuarios)
})


app.post('/rede/usuarios', (req, res) => {
    userId++
    usuarios.forEach(user => {
        if (req.body.email === user.email) {
            return res.send('E-mail já cadastrado na base')

        }
    });
    usuarios.push({id:userId,nome:req.body.nome, email:req.body.email})
    res.send('Usuário cadastrado com sucesso').status(201)
})

app.listen(5000, () => console.log('Usuarios. Porta 5000'))