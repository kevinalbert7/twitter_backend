const verifyUser = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.satus(401).json({ error : "Unauthorized" })
    }
}

module.exports = {
    verifyUser
}