const express = require('express');
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello Node Express!'));
app.get('/students', (req, res) => res.send("{'Roll': 2001, 'Name': 'Bikram'}, {'Roll': 2002, 'Name': 'Lucifer'}"));
app.get('/home', (req, res) => res.sendFile(__dirname+'/index.html'));
app.get('*', (req, res) => res.status(400).send(`<h2 style="text-align:center;" >Page not found! </br> Status code: 404</h2>`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))