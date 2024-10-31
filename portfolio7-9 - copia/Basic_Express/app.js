const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = (weight / (height * height)) * 10000; 

    res.send(`Tu IMC es: ${bmi.toFixed(2)}`); 
});


app.listen(PORT, () => {
    console.log(`listen to http://localhost:${PORT}`);
});
