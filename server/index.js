let express = require('express')
let cors = require('cors')

let app = express()

app.use(cors())
app.use(express.json())

let database = []

app.get('/query-param-data', (req, res) => {
    let name = req.query.name
    let age = req.query.age

    let newObj = {
        name: name,
        age: age
    }

    database.push(newObj)

    res.status(200).send(database)
})

app.listen(4000, () => {
    console.log('my backend is listening for HTTP requests on port 4000')
})

//no info?
//query parameters
//route parameters
//http body

//some url
//https://jared.com/my/website?prop1=value1&prop2=value2&prop3=value3

//express will create an object out of the query sting, like this:
// {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// }
//this object is actually req.query
//so if I say req.query.prop1, I'll get the string 'value1'