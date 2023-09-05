const {
    validationResult
} = require('express-validator')



module.exports = {
    register: (req, res) => {

        res.render('index')
    },
    procesoLogeo: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
              
           req.session.userLogeado=req.body
           console.log(req.session.userLogeado);
            
            req.body.remember!= undefined&& res.cookie('userCookie',req.session.userLogeado,{maxAge:1000*60})
            return res.redirect('/')
        } else {
            const {
                nombre,
                email,
                edad,
                color
            } = req.body
            res.render('index', {
                nombre,
                email,
                edad,
                color,
                errors: errors.mapped(),
                old: req.body
            })
        }


    },
    userLogeado: (req, res) => {
        const user = req.session.userLogeado
        console.log(user);
        const colorFondo = 'style=background-color:' + user.color + ';'
        res.render('userLogeado', {
            colorFondo,
            user
        })

    },
    userLogout: (req, res) => {
        res.clearCookie('userCookie')
        req.session.destroy()
        res.redirect('/')
    },

}