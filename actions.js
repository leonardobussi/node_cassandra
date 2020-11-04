module.exports = {
	InserirContato : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("INSERT INTO contato (email, nome, telefone) VALUES (?,?,?,?,?)", [post.email, post.nome, post.telefone], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	AtualizarContato : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("UPDATE contato SET nome = ?, telefone = ?  WHERE email = ?", [post.nome, post.telefone, post.contatoEdit], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	DeletaContato : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("DELETE FROM contato WHERE email = ?", [post.contatoDel], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	CarregaContato : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
		    	var query = "SELECT * FROM contato";
		    	if(typeof(req.query.email) != "undefined"){
		    		query += " WHERE email = '"+req.query.email+"'";
		    	}
				pool.cql(query, [], function(err, results){
					var data = [];
					results.forEach(function(row){
						var obj = {};
					  	row.forEach(function(nome,value,ts,ttl){
					    	obj[nome] = value;
					  	});
					  	data.push(obj);
					});
					res.send(data);
				});
		    }
		});
	}
}