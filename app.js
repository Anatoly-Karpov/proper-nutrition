require('dotenv').config();

const express = require('express');
const path = require('path');
const process = require('process');
const sha256 = require('sha256');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const hbs = require('hbs');

const indexRouter = require('./routes/indexRouter');
// const usersRouter = require('./routes/usersRouter');

const app = express();
const PORT = 3000;

// Start server settings
app.set('view engine', 'hbs'); // дает нам право рендерить hbs в res.render()
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

// End server settings

// Start middleware section
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
  store: new FileStore({}), // если не работает попробуй ввести в терминале chmod -R 777 sessions
  secret: process.env.SECRET ?? 'qwerty',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  name: 'auth',
}));
// End middleware section

// Start routes section
app.use('/', indexRouter);
// app.use('/users', usersRouter);
// End routes section

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server started');
});
