const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Employee', employeeSchema)