const express = require('express')

const  app = express();

const PORT = 3000;


app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`Processing time: ${delta}ms`);
})




app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})