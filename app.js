var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var index = require('./routes/index');
var customer = require('./routes/API/customer');
var login = require('./routes/API/login');

var port = 8080;
var app = express();


//  View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//  Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser (Middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/login', login);
app.use('/api/customer', customer);
app.use('/', index);

//app.use('/api/login')

app.listen(port, function(){
    console.log('Server started on port'+port);
});

