const JWT_SECRET_KEY = require("./config")
const User = require("./models/User");
const { use } = require("./routes");

async function authMiddleware(req,res,next){
    const headerTokenString = req.headers.authorization;
    const headerToken = headerTokenString.split(" ")[1];

    if(!headerTokenString || !headerTokenString.startsWith("Bearer ")){
        return res.status(403).json({})
    }

    try{
        const decoded = jwt.verify(headerToken,JWT_SECRET_KEY);
        const userId = decoded.userId;
        req.userId = userId;
        next();
    }catch(error){
        return res.status(403).json({})
    }

}   

module.exports = { authMiddleware } 