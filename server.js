const { application } = require('express');
const express = require('express');


const HOST = 'localhost';
const PORT = 3001;

let app = express();


app.use(express.static('./public/pages'))

app.listen(PORT, HOST, ()=>{

    console.log(`Server is accessible via http://${HOST}:${PORT}`)



})