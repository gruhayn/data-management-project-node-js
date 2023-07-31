const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const jobRoutes = require('./routes/jobRoutes'); 


const app = express();

//connect to db
const dbURI = 'mongodb://admin:p%40ssw0rd@localhost:27017/?authMechanism=DEFAULT&authSource=admin';
mongoose.connect(dbURI, {useNewUrlParser: true, dbName:'Database'})
    .then((result) => {
        console.log('connected to db');
        app.listen(3000, 'localhost');
    })
    .catch((err) => console.log(err));

//register veiw engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.redirect('/jobs');
});

//blog routes
app.use('/jobs', jobRoutes);

app.use( (req, res) => {
    res.status(404).render('404', {title: "404" });
});
