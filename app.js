var express = require('express');
var fs = require('fs');
var helenus = require('helenus');
var actions = require('./actions');
var pool = new helenus.ConnectionPool({
	hosts      : [' 127.0.0.1:9042'],
	keyspace   : 'disciplinas',
	timeout    : 3000
}); 
pool.on('error', function(err){
	console.error(err.name, err.message);
});	
var app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/css/*', function (req, res) {
  res.sendfile(__dirname + '/www/css/' + req.params[0]);
});

app.get('/js/*', function (req, res) {
  res.sendfile(__dirname + '/www/js/' + req.params[0]);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/www/index.html');
});

app.post('/contato', function (req, res) {
	if(typeof(req.body.contactEdit) != "undefined"){
		actions.AtualizaContato(req, res, pool);
	} else {
		actions.InserirContato(req, res, pool);
	}
});

app.post('/deleta', function (req, res) {	
	actions.DeletaContato(req, res, pool);
});

app.get('/Carrega', function (req, res) {
	actions.CarregaContato(req, res, pool);
});
var porta = 3000
app.listen(porta);
console.log('Rodando na porta ', porta);
