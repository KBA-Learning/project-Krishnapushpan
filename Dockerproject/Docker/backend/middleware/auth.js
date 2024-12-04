
// import jwt  from 'jsonwebtoken';
// import dotenv from "dotenv";
// dotenv.config();

// const secretkey = process.env.Secretkey;
// const authenticate =(req,res, next)=>{
// const cookies =req.headers.cookie;

// const cookie=cookies.split(';')
// for(let cooki of cookie){
//     const [name,value] = cooki.trim().split('=');
//     if(name=='asuser'){
//     const verified=  jwt.verify(value ,secretkey )
//     req.username = verified.username;
//     break;
//     }
//     if(name=='asadmin'){
//         const verified=  jwt.verify(value ,secretkey )
//         req.adminname = verified.adminname;
//         break;
//         }

// }
// next();
// }


// export{authenticate};
// const jwt = require("jsonwebtoken");
import jwt from 'jsonwebtoken'

function verifyToken(req, res, next) {
  const token = req.cookies.Authtoken;
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.userType = decoded.userType;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
export {verifyToken}
// module.exports = verifyToken;
