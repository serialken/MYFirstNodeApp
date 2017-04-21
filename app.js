var express = require('express');

var app = express();

app.get('/', function(req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    res.render('home.html.twig');
});
app.get('/page/:pagenum', function(req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    if (isNaN(req.params.pagenum)){
        res.status(404).send('les numéros de pages doivent etre numérique');
    }else{
        // res.end('Vous êtes dans la page ' + req.params.pagenum + ' .');
        res.render('pages.html.twig', {numpage: req.params.pagenum});
    }
});


app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});


app.listen(8080);


