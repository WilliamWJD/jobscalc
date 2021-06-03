const express = require('express');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');

app.use(routes);

app.use(express.static("public"));

app.listen(3333,()=>{
    console.log('Servidor online');
})