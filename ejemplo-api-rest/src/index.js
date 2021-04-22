const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

// Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port ${3000}');
});