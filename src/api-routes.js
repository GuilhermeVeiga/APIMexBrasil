// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();


// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Esta funcionando',
       message: 'Seja bem vindo a Mexbrasil',
    });
});

// Import contact controller
var departamentoController = require('./Departamento/departamentoController');
var ocorrenciaController  = require('./Ocorrencia/ocorrenciaController');
var usuarioController  = require('./Usuario/usuarioController');

// Contact routes
router.route('/Departamento')
    .get(departamentoController.index)

router.route('/Ocorrencia')
    .get(ocorrenciaController.index)

router.route('/Usuario')
    .get(usuarioController.index)

router.route('/Usuario/:id?')
    .get(usuarioController.view)

// Export API routes
module.exports = router;