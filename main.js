var express = require('express');
var app =  express();
//var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/test');

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use('/page_assets', express.static(__dirname + '/jscode'));

//var Schema = mongoose.Schema;

//var Person = mongoose.model('Person', personSchema);

app.get('/',function(req,res){
    res.render('login');
});

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);   
	next();
});

app.use('/admin.html',function(req,res,next){
    console.log('Wait for it!');
    next();
})

app.get('/api',function(req,res){
    res.render('index');
});


app.listen(3000); 