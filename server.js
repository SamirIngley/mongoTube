// Initialize express
const express = require('express')
// const methodOverride = require('method-override')
const app = express()
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


require('./controllers/posts.js')(app);
// Set db
require('./data/db');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());


// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');




app.get('/', (req,res) => {
    res.render('home', {msg: 'Videos'}) 
})

app.get('/posts/new', (req,res) => {
    res.render('posts-new', {})
})
 


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000')
})