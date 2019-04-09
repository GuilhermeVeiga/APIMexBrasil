var sql = require('../DataBase/db');

// Handle index actions
exports.index = function (req, res) {
    sql.query('SELECT NmUsuario, Funcao, DtAdmissao FROM Usuarios', (err, result) =>{
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
    sql.query('SELECT NmUsuario, Funcao, DtAdmissao FROM Usuarios WHERE IdFirebase = ?' + req.params.id, (err, result) =>{
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