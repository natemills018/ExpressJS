const express = require('express')
const cors = require('cors')
// const path = require('path')
// const bodyParser = require('body-parser')
const apiRoutes = require('./routes');
// const fs = require('fs')


let app = express();


app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);


// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// // })

// app.use(bodyParser.urlencoded({extended: false}))

// app.post('/contact-form', (req, res) =>{
//     console.log(req.body.email);
//     console.log(req.body.name);
//     res.send('Thank you for submitting the contact form');
// })


// // app.use((req, res, next) => {
// //     fs.appendFileSync('log.txt',`${req.url}\n`);
// //     next();
// // })


// app.use(express.static(path.join(__dirname, '../public')))

// app.get('/order/:id', (req, res) => {
//     let id = req.params.id
//     res.send(id);
// })

app.listen(3000);