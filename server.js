// server.js
var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(sslRedirect());
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 80;
app.listen(port);