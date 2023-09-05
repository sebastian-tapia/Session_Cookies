const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();
const loginValidator = require('../validations/loginCheck');
/* GET home page. */
router.get('/',indexController.register );
router.post('/',loginValidator,indexController.procesoLogeo)
router.get('/userLogeado',loginValidator,indexController.userLogeado)
router.get('/logout',indexController.userLogout)


module.exports = router;
