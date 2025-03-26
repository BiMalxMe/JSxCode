const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000; // Use default port if not set
console.log(`Your port is ${port}`);

app.use(bodyParser.json());

app.post('/', function (req, res) {
    //can also write ans=req.body.message            (message is the data sent by the POST)
    let ans=req.query.message;
    console.log(ans);
    res.send('Request received');
});

app.listen(port, function (err) {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Successfully started server and listening on port', port);
    }
});


//npx nodemon index.js to auto reload the website