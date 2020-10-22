const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'default'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources','views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

routes(app);
app.listen(port, ()=> console.log(`Server is running, port = ${port}`))