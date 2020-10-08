const express = require('express')
const bodyParser = require('body-parser')
const Joi = require('joi')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const employees = [
    {id: 1, name: "John", designation: "manager"},
    {id: 2, name: "Jane", designation: "staff"},
    {id: 3, name: "Joy", designation: "techsupport"},
]

app.get('/employees', (req, res) => {
    res.status(200).json(employees)
})

app.get('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id))
    if(!employee) {
        res.status(404).send("employee with given id is not avialable.")
        return
    }
    res.status(200).send(employee)
})

app.post('/employees', (req, res) => {

    const {error, value} = validateEmployee(req.body)

    console.log(validateEmployee(req.body))

    if(error) return res.status(400).send(error + '')

    const employee = {
        id: employees.length + 1,
        name: value.name,
        designation: value.designation
    }

    employees.push(employee)
    res.status(200).json(employee)
})

app.put('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id))
    if(!employee) {
        res.status(404).send("employee with given id is not avialable.")
        return
    }

    const {error, value} = validateEmployee(req.body)

    if(error) return res.status(400).send(error + '')
    
    employee.name = value.name
    employee.designation = value.designation
    res.status(200).send(employee)
})

app.delete('/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id))
    if(!employee) {
        res.status(404).send("employee with given id is not avialable.")
        return
    }

    const index = employees.indexOf(employee)
    employees.splice(index, 1)
    
    res.send(employee)
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server is up and running at ${port}`))

function validateEmployee(data) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        designation: Joi.string().min(2).required()
    })
    return schema.validate(data)
}
