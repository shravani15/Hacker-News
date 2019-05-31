var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/slackernews', {useNewUrlParser: true}).then(res => console.log('MongoDB connected')).catch(err => console.log("Err at connrction with mongo ", err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
// app.use(session({secret:"iduhu32y3h42eqklj24kejen1", resave:false, saveUninitialized:true}))

app.set('view engine', 'ejs')


app.listen(8080, function() {
    console.log('Node.js listenening on port ' + 8080)
});

var mainRoutes = require('./routes/app')
app.get('/', (request, response) => response.render('home'));
app.use(mainRoutes)
