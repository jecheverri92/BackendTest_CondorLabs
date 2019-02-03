const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//conecting db

mongoose.connect('mongodb://frodriguez:Password1@ds155634.mlab.com:55634/evercheck-test-9',{ useNewUrlParser: true })
        .then(db => console.log('DB conected'))
        .catch(err => console.log(err));
        
//importing routes
const indexRoutes = require('./routes/index')

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', indexRoutes);

//Starting Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
})

