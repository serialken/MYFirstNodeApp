/**
 * Created by yannick.dieng on 22/03/2017.
 */
var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res){
    var page = url.parse(req.url).pathname;
    console.log(page);
    var ok = 200;
    var notFound = 400;
    if (page == '/'){
        res.writeHead(ok, {"Content-Type": "text/plain"});
        res.write('bienvenue sur la page d\'accueil !');
    }else{
        res.writeHead(notFound, {"Content-Type": "text/plain"});
        res.write('Page non trouvée !!!');
    }
    // res.write('<!DOCTYPE html>'+
    //     '<html>'+
    //     '    <head>'+
    //     '        <meta charset="utf-8" />'+
    //     '        <title>Ma page Node.js !</title>'+
    //     '    </head>'+
    //     '    <body>'+
    //     '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
    //     '    </body>'+
    //     '</html>');
    res.end();
});

server.on('close', function () {
    console.log('bye, bye');
})

server.listen(8080);
