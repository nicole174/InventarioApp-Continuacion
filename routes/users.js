var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Esto solo realiza el proceso de autentificacion (para el ejemplo),
// pero aun no tiene elementos de SEGURIDAD
router.post('/login', (req, res, next)=>{
  // console.log( req.body.email, req.body.passwd );
  usuario.login(req.body.email,req.body.passwd,( e, d )=>{ // req
    if (d) {
      res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
    } else {
      res.json(e);
    }
  });

});

module.exports = router;
