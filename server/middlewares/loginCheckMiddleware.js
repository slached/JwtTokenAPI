const checkForLogin = (req, res, next) => {

    if (req.cookies.token) return res.json({message: "You have already logged in."})
    else next()
}

const checkForLogout = (req, res, next) => {

    if (!req.cookies.token) return res.json({message: "There is no account founded logged in."})
    else next()
}

module.exports = {checkForLogin, checkForLogout}