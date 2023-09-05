const {check}=require('express-validator');


module.exports=[
    check('nombre').notEmpty().withMessage('Campo obligatorio').isLength({ min:3,max:15}).withMessage('Debe tener mas de 3 caracteres'),
    check('email').notEmpty().withMessage('Campo obligatorio').isEmail().withMessage('ingrese un email'),
    check('edad').notEmpty().withMessage('Campo obligatorio'),
    check('color').notEmpty().withMessage('Campo obligatorio')
]