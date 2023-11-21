// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create an object of express
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create a route
app.get('/', function(req, res){
    res.send('Welcome to Express JS');
});
// 5. Create a web server
app.listen(port, function(){
    console.log(`Web server is running on port ${port}`);
});
