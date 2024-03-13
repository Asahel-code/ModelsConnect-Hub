const verifyClientRole = (req, res, next) => {
    if (!req.isClient) return res.status(403).json({ message: "You are forbidden to access!" });
    next();
}

module.exports = verifyClientRole