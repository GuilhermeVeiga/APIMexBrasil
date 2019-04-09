var mysql = require('mysql'); 

const mysqlConn = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '1234',
    database : 'API'
    /*host :'guilhermeeyasmin.com.br',
    user : 'guilherm_root',
    password : 'yasmin3106',
    database : 'guilherm_reactDB' */
});

mysqlConn.connect((err) => {
    if(!err)
    console.log('DB conectado com sucesso.')
    else
    console.log('erro ao tentar se conectar \n Error : ' + JSON.stringify(err, undefined, 2));
});

// mysqlConn.query(sqlQry, function(error, results){
//     if(error) 
//       res.json(error);
//     else
//       res.json(results);
//       mysqlConn.end();
//     console.log('executou!');
// });


// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
//   });


module.exports = mysqlConn;