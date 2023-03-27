const express = require('express');

const app = express();

const TASKLIST = [
    {
        "id":"1",
        "isCompleted":false,
        "description":"Walk the dog",
    },
    {
        "id":"2",
        "isCompleted":false,
        "description":"Visit my grandparents",
    },
    {
        "id":"3",
        "isCompleted":false,
        "description":"listen to music",
    } 
]

app.use(express.json())

app.get('/', (req, res)=> {
    res.json(TASKLIST);
});

app.listen(8080, () => {
    console.log('servidor corriendo');
});