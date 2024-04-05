const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token

    if (!token) return res.status(401).json({message: "Unauthorized"})

    try {
        // Token is hiding some data's we preferred with secret hash that we choose in env. We call that payload
        // here we decode the payload section and add this data into req
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (e) {
        res.clearCookie("token")
        res.status(400).json({message: "Token expired or manipulated."})
    }
}

module.exports = {isAuthenticated}