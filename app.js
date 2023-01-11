//API KEY  6d13a14

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch')


const app = express();
app.use(express.json()); //habilitar el tipo de datos que vamos a recibir en el servidor

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home');
})

app.post('/', function (req, res, next) {
    
    const inputData = JSON.stringify(req.body.title);
    console.log(inputData);
    res.redirect(`/film/${inputData}`);
});

app.get('/film/:title?', async (req, res) => {
    if (req.params.title) { //con title
        try {
            let response = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=6d13a14`);
            let film = await response.json(); 
            res.render('film', {film}); 
            //console.log(film);
            }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            }
    } else { // sin title
            console.log(`ERROR: ${error.stack}`);
            
        }
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})