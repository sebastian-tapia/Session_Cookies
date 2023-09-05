module.exports=(req,res,next)=>{
    if(req.cookies.userCookie){
        req.session.userLogeado=req.cookies.userCookie
    }
    next()
}