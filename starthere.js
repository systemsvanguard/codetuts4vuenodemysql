var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors  = require('cors')
const corsOptions  = {
  origin: 'http://localhost:4200', 
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions) )

const db  = require('./app/config/dbconfig.js');

/* Drop the table if it already exists */
db.sequelize.sync({force: true } ).then(() => {
  console.log('Drop table & ReSync with {force: true} ');
} );

require('./app/route/customer.routes.js')(app);

// create the web server
var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port  

  console.log("Web App now running at http://%s:%s", host, port )
}  )
