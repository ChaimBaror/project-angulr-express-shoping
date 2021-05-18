const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');


const app = express()


// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/', require('./routes/index'));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "hi server express here"
    })
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})




