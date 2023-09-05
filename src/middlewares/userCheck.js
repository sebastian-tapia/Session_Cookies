module.exports=(req,res,next)=>{
    res.locals.userLogeado= req.session.userLogeado &&req.session.userLogeado
    next()
}