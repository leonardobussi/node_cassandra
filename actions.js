module.exports = {
	Inserirdisciplinas : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("INSERT INTO disciplinas (nome, professor) VALUES (?,?,?,?,?)", [post.nome, post.professor], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	Atualizardisciplinas : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("UPDATE disciplinas SET professor = ?  WHERE nome = ?", [post.professor, post.nome], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	Deletadisciplinas : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
				pool.cql("DELETE FROM disciplinas WHERE nome = ?", [post.disciplinasDel], function(err, results){
					res.redirect('/');
				});
		    }
		});
	},
	Carregadisciplinas : function (req, res, pool){
		pool.connect(function(err, keyspace){
		    if(err){
		    	throw(err);
		    } else {
		    	var post = req.body;
		    	var query = "SELECT * FROM disciplinas";
		    	if(typeof(req.query.nome) != "undefined"){
		    		query += " WHERE nome = '"+req.query.nome+"'";
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