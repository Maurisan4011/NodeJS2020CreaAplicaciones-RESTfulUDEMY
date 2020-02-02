const express = require('express')
const app = express()
const port = process.env.PORT || 3003
// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = require('express-validator');

app.use(express.json())





var coches = [
    { id: 0, marca: 'BMW', modelo: 'X3', year: '2020' },
    { id: 2, marca: 'Renault', modelo: 'X3', year: '2020' },
    { id: 3, marca: 'Fiat', modelo: 'X3', year: '2020' },

]

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/api/cars/list', (req, res) => {
    res.send(['BMW MAuri1', 'AUDI 7A3', 'Mercedes Clase A'])
})


app.get('/api/cars/id/:id', (req, res) => {
    res.send(req.params.id)
})

app.get('/api/cars/:company/:model', (req, res) => {
    res.send(req.params)
})

app.get('/api/cars/', (req, res) => {
    res.send(coches)
})

app.get('/api/cars/:marca', (req, res) => {
    const coche = coches.find(coche => coche.marca === req.params.marca)
    if (!coche) {
        res.status(404).send('No tenemos nin gun coche de esa marca coche Señor ')
    } else {
        res.send(coche)
    }

})



app.post('/api/cars/', (req, res) => {
    var carID = coches.length;
    var coche = {
        id: carID,
        marca: req.body.marca,
        modelo: req.body.modelo,
        year: req.body.year
    }
    coches.push(coche)
    res.send(coche)
})

app.post('/api/cars2', (req, res) => {
    if (!req.body.marca || req.body.marca.length<3) {
        res.status(400).send('Introdu<ca la empresa correcta ')
        return
    }
    var carID = coches.length;
    var coche = {
        id: carID,
        marca: req.body.marca,
        modelo: req.body.modelo,
        year: req.body.year
    }
    coches.push(coche)
    res.status(201).send(coche)
})

app.post('/api/cars3',[
    check('marca').isLength({ min: 3 }),
    check('modelo').isLength({min:3})
],(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if (!req.body.marca || req.body.marca.length < 3) {
        res.status(400).send('Introdu<ca la empresa correcta ')
        return
    }
    var carID = coches.length;
    var coche = {
        id: carID,
        marca: req.body.marca,
        modelo: req.body.modelo,
        year: req.body.year
    }
    coches.push(coche)
    res.status(201).send(coche)
})

app.listen(port, () => console.log('Escuchando Puerto:' + port))