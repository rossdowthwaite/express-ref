var express = require('express');
var app = express();

// app.get('/blocks', function(request, response) {
//     var blocks = ['Fixed', 'Movable', 'Rotating'];
//
//     // curl http://localhost:3000/blocks?limit=1
//     if (request.query.limit >= 0){
//         response.json(blocks.slice(0, request.query.limit));
//     } else {
//         response.json(blocks);
//     }
// })

// curl -i http://localhost:3000/blocks/Fixed
// curl -i http://localhost:3000/blocks/Movable

var blocks = {
    'Fixed' : 'Fastened securely in position',
    'Movable' : 'Capable of being moved',
    'Rotating' : 'Moving in a circle around its center'
}

app.get('/blocks/:name', function(request, response) {
    var description = blocks[request.params.name];
    if (!description){
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        response.json(description);
    }
})

app.listen(3000, function(){
    console.log('3000 yo!');
})
