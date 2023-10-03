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

app.get('/route-param-data/:name/:age', (req, res) => {
    let name = req.params.name
    let age = req.params.age

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

//Ways to send info to the backend:
//(no info?)
//query parameters
//route parameters
//http body



//QUERY PARAMETERS:
//some url
//https://jared.com/my/website?prop1=value1&prop2=value2&prop3=value3

//query string is:
// ?prop1=value1&prop2=value2&prop3=value3

//express will create an object out of the query sting, like this:
// {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// }
//this object is actually req.query
//so if I say req.query.prop1, I'll get the string 'value1'



//ROUTE PARAMETERS
//they look like part of the URL path... but they're not, because the backend doesn't see them that way

//for example
//if my front end sends a GET with the following URL:
// http://localhost:4000/my/route/here

//it looks like the path of the URL is /my/route/here
//which it is... but Express might not see it that way

//if the backend has
//app.get('/my/route/:blah')
//it is actually capable of matching
// /my/route/here,
//only, Express is saying that the third slash can be anything you want, not just "here"
// so
//app.get('/my/route/:blah')
//could match
// /my/route/jared
// /my/route/supercalifrgl
// /my/route/anything
// and now, express is going to save the third part as a "route parameter"
//which can be accessed from req.params
//specifically, it would be accessed with
// req.params.blah
// because of :blah in /my/route/:blah on the backend
