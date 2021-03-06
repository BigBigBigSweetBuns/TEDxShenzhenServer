var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var eventsRouter = require('./routes/events');
var videosRouter = require('./routes/videos');
var speakersRouter = require('./routes/speakers');
var toolsRouter= require('./routes/tools');

var app = express();

// 跨域  cors
var cors = require('cors');
var corsOptions = require('./config/cors');
app.use(cors({ corsOptions }));

// view engine setup
app.set('views', path.join(__dirname,
  'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let routerBaseURL = "/api";
app.use(routerBaseURL + '/', indexRouter);
app.use(routerBaseURL + '/news', newsRouter);
app.use(routerBaseURL + '/events', eventsRouter);
app.use(routerBaseURL + '/videos', videosRouter);
app.use(routerBaseURL + '/speakers', speakersRouter);
app.use(routerBaseURL + '/tools', toolsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;