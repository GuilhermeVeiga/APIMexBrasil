var sql = require('../DataBase/db');

// Handle index actions
exports.index = function (req, res) {
    sql.query('SELECT id, NmDepartamento FROM departamentos', (err, result) =>{
        if(!err)
        {    // res.json({
            //     status: 'API Esta funcionando',
            //     message: result,
            // });]
            res.json(result);
            console.log(result);
        }
        else
        {
            res.json(err);
        }
    });
};