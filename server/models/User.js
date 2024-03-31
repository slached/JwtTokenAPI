const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {type: String, required: true, trim: true}

}, {timestamps: true})

module.exports = mongoose.model('users', userSchema)