var express = require('express');
var fs = require('fs');
var helenus = require('helenus');
 var cassandra = require('cassandra-driver')

// var actions = require('./actions');
// var pool = new helenus.ConnectionPool({
// 	hosts      : ['localhost:9042'],
// 	keyspace   : 'disciplinas',
// 	timeout    : 3000
// }); 


// pool.on('error', function(err){
// 	console.error(err.message);
// });	
// var app = express();
// app.use(express.json());
// app.use(express.urlencoded());

// app.get('/css/*', function (req, res) {
//   res.sendFile(__dirname + '/www/css/' + req.params[0]);
// });

// app.get('/js/*', function (req, res) {
//   res.sendFile(__dirname + '/www/js/' + req.params[0]);
// });

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/www/index.html');
// });

// app.post('/contato', function (req, res) {
// 	if(typeof(req.body.Atualizardisciplinas) != "undefined"){
// 		actions.Atualizardisciplinas(req, res, pool);
// 	} else {
// 		actions.Inserirdisciplinas(req, res, pool);
// 	}
// });

// app.post('/deleta', function (req, res) {	
// 	actions.Deletadisciplinas(req, res, pool);
// });

// app.get('/carrega', function (req, res) {
// 	actions.Carregadisciplinas(req, res, pool);
// });
// var porta = 3000
// app.listen(porta);
// console.log('Rodando na porta ', porta);
