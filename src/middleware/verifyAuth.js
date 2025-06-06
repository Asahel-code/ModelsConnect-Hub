const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ "message": "You are not authenticated!" });
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (error, decoded) => {
            if (error) return res.status(403).json({ "message": "Invalid token!" }); //invalid token
            req.userId = decoded.UserInfo.userId;
            req.isAdmin = decoded.UserInfo.isAdmin;
            req.isModel = decoded.UserInfo.isModel;
            req.isClient = decoded.UserInfo.isClient;
            next();
        }
    );
}

module.exports = verifyAuth