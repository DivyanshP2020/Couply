const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)) {throw new Error('Provide a valid Email')}
        },
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})

module.exports = User 