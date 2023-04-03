const express = require("express");
let tareasJson = require('./tareas.json')


const router = express.Router()

router.get('/', (req, res)=> {
    res.send(tareasJson);
});

router.get('/completadas', (req, res) => {
    let completadas = tareasJson.filter((tarea) => tarea.isCompleted ===  true)
    res.send(completadas)
})

router.get('/incompletas', (req, res) => {
    let incompletas = tareasJson.filter((tarea) => tarea.isCompleted ===  false)
    res.send(incompletas)
})

module.exports = router;