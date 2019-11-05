const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const connection = require("./database/database");
const Ranking = require("./database/Ranking");

//EXPRESS utilizará o EJS
app.set('view engine', 'ejs');

//Utilizará arquivos estáticos
app.use(express.static('public'));

//Decofidicar os dados enviados pelo formulário
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/partida", (req, res) => {
    var nome = req.body.nome;    
    res.render("partida", {
        nome: nome
    });
});

app.post("/salvarRanking", (req, res) => {
    
    Ranking.create({
        nome: "script.nomeJogador",
        pontuacao: 1
    }).then(() => {
        res.redirect("/");
    });
});


app.listen(port, () => {console.log("App rodando!")});