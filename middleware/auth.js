const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{

        const token = req.headers.authorization.split(" ")[1]; //para obtención del token
        const decoded = jwt.verify(token, "debugkey");
        req.user = decoded;
        //console.log(decoded);  //se utilizó para ver que datos tenemos
        next();
    }
    catch(error){
        return res.status(401).json({code:401, message:"You do not have permission"});
    }
}