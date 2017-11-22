var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World');

    // Same as above but usng Node.js functions
    // response.write('Hello World');
    // response.end();
});

app.get('/blocks', function(request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
    // same as response.send(blocks);
});

app.listen(3000, () => console.log('Listening on port 3000x'));
