let queryParamsForm = document.getElementById('query-params-form')
let routeParamsForm = document.getElementById('route-params-form')
let bodyForm = document.getElementById('body-form')
let queryParamsNameInput = document.getElementById('query-params-name-input')
let queryParamsAgeInput = document.getElementById('query-params-age-input')
let routeParamsNameInput = document.getElementById('route-params-name-input')
let routeParamsAgeInput = document.getElementById('route-params-age-input')
let bodyNameInput = document.getElementById('body-name-input')
let bodyAgeInput = document.getElementById('body-age-input')

queryParamsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let name = queryParamsNameInput.value
    let age = queryParamsAgeInput.value

    axios.get(`http://localhost:4000/query-param-data?name=${name}&age=${age}`)
    .then((response) => {
        console.log(response.data)
        alert('success')
    })
})

routeParamsForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let n = routeParamsNameInput.value
    let a = routeParamsAgeInput.value

    axios.get(`http://localhost:4000/route-param-data/${n}/${a}`)
    .then((response) => {
        console.log(response.data)
        alert('success')
    })
})

bodyForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let maBod = {
        name: bodyNameInput.value,
        age: bodyAgeInput.value,
    }

    axios.post('http://localhost:4000/body-data', maBod)
    .then((response) => {
        console.log(response.data)
        alert('success')
    })
})