const express = require('express');
const mongoose = require('mongoose');



const app = express()

mongoose.connect('mongodb://localhost/sourceElement')
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/api'))

app.use(function(err, req, res, next){
    console.log(err)
    res.status(422).send({error: err._message})
})

app.listen(process.env.port || 3000, () => {
    console.log('listening for requsts')
});