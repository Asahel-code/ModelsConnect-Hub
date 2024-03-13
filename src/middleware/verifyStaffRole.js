const verifyStaffRole = (req, res, next) => {
    if (!req.isStaff) return res.status(403).json({ message: "You are forbidden to access!" });
    next();
}

module.exports = verifyStaffRole;