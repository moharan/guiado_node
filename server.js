var express = require('express');
var path = require('path');
//iniciar express
var app = express();
// endpoint
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname, 'assets')));
app.get('/', (req,res) => {
	//res.send('Hello World!');
	res.sendFile(__dirname+'/index.html');
});
//servidor 8080
app.listen(8080);