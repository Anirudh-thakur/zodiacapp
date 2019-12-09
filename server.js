const express = require('express'); // express module constant

const app = express(); // initialising application

app.use(express.static(__dirname+'/client'))  // for front end , __dir

const port = process.env.PORT || 3000                      // creating port can be any 4 digit

app.listen(port, () =>                // creating port and using a call back server
{
	console.log("Hello server(nodemon), Port number :"+3000);
}
);