const User = require('../models/User.js' +
    '')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET
const register = async (req, res) => {

    try {
        const {username, password} = req.body
        const newUser = new User({username: username, password: await bcrypt.hash(password, 10)})
        await newUser.save()
        res.json({message: `${username} created successfully.`})

    } catch (e) {
        res.json({message: e.message})

    }
}

const login = async (req, res) => {

    try {
        const {username, password} = req.body
        const newLoginUser = await User.findOne({username: username})
        if (newLoginUser === null) res.status(404).json({message: "user could not founded by this username."})
        else {
            const comparePassword = await bcrypt.compare(password, newLoginUser.password)
            if (comparePassword) {
                const token = jwt.sign({userId: newLoginUser._id}, jwtSecret)
                res.cookie('token', token, {httpOnly: true})
                res.json({message: "login success."})
            } else res.status(401).json({message: "Password is incorrect."})
        }

    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const logout = async (req, res) => {
    res.clearCookie("token")
    res.json({message: "logout success"})
}

const getUsers = async (req, res) => {

    try {
        const users = await User.find()
        res.status(200).json({users: users})
    } catch (e) {
        res.status(401).json({message: e})
    }

}

const deleteUsers = async (req, res) => {

    try {
        const result = await User.findOneAndDelete({username: req.params.un})
        res.status(200).json({message: `${result._id} has deleted successfully.`})
    } catch (e) {
        res.status(401).json({message: "User doesn't exists."})
    }

}

module.exports = {register, getUsers, deleteUsers, login, logout}