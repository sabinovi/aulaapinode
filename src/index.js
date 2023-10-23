// console.log('olá mundo');

//criando o index.js
//criação de uma aplicação express

const express = require('express'); //importtando express

const path = require('path'); //importando path
//o path retorna o caminho de forma dinamica

const app = express();
//o app ira receber o express e todas as suas dependencias

const router = express.Router()
//isso permite que a gente crie diferentes URLs e endpoints para que o frontend possar fazer chamadas

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})
//aqui definimos a nossa rota para o arquivo html usando o path para sempre retornar dinamicamente o que vem antes da "/pages/home.html"
//tudo que se encontra depois da barra "/" serão nossas rotas

app.use(router);
//apos declarar nossas rotas, aqui falamos para nosso app usar elas como referencia

app.listen(3333, ()=>{
    console.log('servidor rodando')
})
//aqui definimos que irá escutar nosso chamado e nos responder

app.get('/hello',(request, reply)=>{
console.log('get funcionando');
res.send({message:'hello world'});
})

app.get('/usuario', (req,res) =>{
    console.log('get usuario funcionando');
    res.send({usuario:'virginia'});
})