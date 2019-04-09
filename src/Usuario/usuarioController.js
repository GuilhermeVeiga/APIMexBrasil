var sql = require('../DataBase/db');

// Handle index actions
exports.index = function (req, res) {
    sql.query('SELECT NmUsuarios, Funcao, Admissao FROM usuarios', (err, result) =>{
        if(!err)
        {
            res.json(result);
            console.log(result);
        }
        else
        {
            res.json(err);
        }
    });
};

exports.view = function (req, res) {
    sql.query('SELECT NmUsuarios, Funcao, Admissao FROM usuarios WHERE idUsuarios = ' + req.params.id, (err, result) =>{
        if(!err)
        {
            res.json(result);
            console.log(result);
        }
        else
        {
            res.json(err);
        }
    });
};