const verifyModelRole = (req, res, next) => {
    if (!req.isModel) return res.status(403).json({ message: "You are forbidden to access!" });
    next();
}

module.exports = verifyModelRole;