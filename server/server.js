const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// const fs = require('fs')


let app = express();

// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// })

app.use(bodyParser.urlencoded({extended: false}))

app.post('/contact-form', (req, res) =>{
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you for submitting the contact form');
})


// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt',`${req.url}\n`);
//     next();
// })


app.use(express.static(path.join(__dirname, '../public')))

// app.get('/order/:id', (req, res) => {
//     let id = req.params.id
//     res.send(id);
// })

app.listen(3000);