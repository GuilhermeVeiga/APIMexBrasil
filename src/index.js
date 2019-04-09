const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors')

const apiRoutes = require("./api-routes")

app.use(cors());

/*
Se o node vai receber os dados vindos através de um POST feito por um formulário HTML, você vai precisar do urlencoded, 
já que o request padrão de um formulário com o metódo POST é um content-type do tipo "application/x-www-form-urlencoded" 
Agora se os dados vão vir de um POST onde o content-type do request for "application/json", então você vai trabalhar com o app.use(bodyParser.json());   */
app.use(bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json ());

// Enviar mensagem para o URL padrão 
app.use('/', apiRoutes);

app.listen(process.env.PORT || 3333);