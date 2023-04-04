const express = require('express');

const app = express();

const mostrarTareasRouter = require('./list-view-router.js');
const editarTareasRouter = require("./list-edit-router");

app.get('/', (req, res)=> {
    res.send('Servidor con Express');
});

app.use(express.json());
app.use('/mostrar-tareas', mostrarTareasRouter);
app.use('/editar-lista-tareas', editarTareasRouter);


app.listen(8080, () => {
    console.log('servidor corriendo en puerto 8080');
});