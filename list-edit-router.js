const express = require("express");
let tareasJson = require('./tareas.json')

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Ruta para crear, eliminar y actualizar tarea (list-edit-router)');
});

router.post('/crear-tarea', (req, res) => {
    let nuevaTarea = req.body; // Obtener la tarea desde el cuerpo de la solicitud
    tareasJson.push(nuevaTarea); // Agregar la nueva tarea al arreglo de tareas
    console.log(tareasJson)
    res.send('Tarea creada exitosamente'); // Enviar una respuesta
});

router.delete('/eliminar-tarea/:id', (req, res) => {
  let tareaId = req.params.id;

  let tareaIndex = tareasJson.findIndex((tarea) => tarea.id == tareaId);

  if (tareaIndex >= 0) {
    tareasJson = tareasJson.filter((tarea) => tarea.id != tareaId); // Utilizar el método filter para eliminar la tarea con el ID especificado
    console.log(tareasJson)
    res.send('Tarea eliminada exitosamente');
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});

router.put('/actualizar-tarea/:id', (req, res) => {
  let tareaId = req.params.id;
  let tareaIndex = tareasJson.findIndex((tarea) => tarea.id == tareaId);

  if (tareaIndex >= 0) {
    let tareaActualizada = req.body;
    tareasJson = tareasJson.map((tarea) => (tarea.id == tareaId ? tareaActualizada : tarea)); // Utilizar el método map para reemplazar la tarea con el ID especificado con la nueva tarea
    res.send('Tarea actualizada exitosamente');
    console.log(tareasJson)
  } else {
    res.status(404).send('Tarea no encontrada');
  }
});

module.exports = router;