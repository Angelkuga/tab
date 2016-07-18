var express = require('express');
var app = express();
app.use('/static', express.static(__dirname + '/'));
app.listen(8888);