var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express'); // import the library
var indexRouter = require('./routes/index'); // import the router module
var cors = require('cors');

var app = express(); // create the express object

// server configuration
app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next(err);
});
app.use(cors({}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter); // load the router module

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});

