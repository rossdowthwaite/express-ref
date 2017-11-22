var express = require('express');
var app = express();

// curl -i http://localhost:3000/blocks/Fixed
// curl -i http://localhost:3000/blocks/Movable

var blocks = {
    'Fixed' : 'Fastened securely in position',
    'Movable' : 'Capable of being moved',
    'Rotating' : 'Moving in a circle around its center'
}

var locations = {
    'Fixed': 'First Floor',
    'Movable' : 'Second Floor',
    'Rotating' : 'Third Floor'
}

app.use(express.static('public'));

app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

    // so can be accessed by all routes
    request.blockName = name;

    next();
});

app.get('/blocks', function(request, response) {
    response.json(Object.keys(blocks));
})

app.get('/blocks/:name', function(request, response) {
    var description = blocks[request.blockName];
    if (!description){
        response.status(404).json('No description found for ' + request.blockName);
    } else {
        response.json(description);
    }
})

app.get('/blocks/:locations', function(request, response) {
    var location = locations[request.blockName];
    if (!description){
        response.status(404).json('No location found for ' + request.blockName);
    } else {
        response.json(location);
    }
})

app.listen(3000, function(){
    console.log('3000 yo!');
})
