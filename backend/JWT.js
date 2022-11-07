var jwt = require('jsonwebtoken');
const JWT_SECRET = "!2#4@mun";
const varifytoken=(req,res,next)=>{
const token=req.header('auth_token') 
if(!token)
{
    res.status(401).send({error:"kindly authenticate token"})
}
try {
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    console.log("varified token")
    next();

} catch (error) {
    res.status(401).send({error:"catch error in token middleware"})
    
}
}
module.exports=varifytoken;