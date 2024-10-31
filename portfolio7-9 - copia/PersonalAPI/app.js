const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs'); 

let names = []; 
let tasks = []; 

app.use(express.urlencoded({ extended: true }));

app.post('/task', (req, res) => {
    const { task } = req.body;
    if (task) tasks.push(task);
    res.redirect('/');
});

app.get('/task', (req, res) => {
    res.json(tasks);
});

app.get('/task/delete/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (!isNaN(index) && tasks[index]) tasks.splice(index, 1);
    res.redirect('/');
});

app.post('/task/delete', (req, res) => {
    const index = parseInt(req.body.index);
    if (!isNaN(index) && tasks[index]) {
        tasks.splice(index, 1);
    }
    res.redirect('/'); 
});


app.get('/task/up/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index > 0) {
        [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    res.redirect('/');
});

app.get('/task/down/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index < tasks.length - 1) {
        [tasks[index + 1], tasks[index]] = [tasks[index], tasks[index + 1]];
    }
    res.redirect('/');
});


app.get('/', (req, res) => {
    res.render('index', { names, tasks, error: null });
});


app.get('/greet', (req, res) => {
    const { name } = req.query;
    if (name) {
        names.push(name);
        console.log(name);
    }
    res.redirect('/');
});


app.get('/greet/:index', (req, res, next) => {
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= names.length) {
        const error = `Error: No existe ningún nombre en el índice ${index}.`;
        next(error);
    } else {
        const name = names[index];
        res.render('wazzup', { name });
    }
});


app.put('/greet/:name', (req, res) => {
    const { name } = req.params;
    if (name) {
        names.push(name);
    }
    res.json({ names });
});


app.use((error, req, res, next) => {
    res.render('index', { names, tasks, error });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
