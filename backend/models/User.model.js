const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true}
})