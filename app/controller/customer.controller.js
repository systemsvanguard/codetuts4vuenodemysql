// DB connection
const db = require('../config/dbconfig.js');
const Customer = db.customers;

// CRUD Controller

// C ~ Create a Customer
exports.create = (req, res) => {
  /* Save to the DB */
  Customer.create({
    name.req.body.name, 
    age: req.body.age 
  } ).then ({
    /* Push created Customer to Client App */
    res.send(customer );
  } ).catch(err => {
    res.status(500).send("Error -> " + err );
  } )
};

// R ~ Retrieve ALL Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers > {
    /* Return ALL Customers */
    res.send(customers);
  } ).catch(err => {
    res.status(500).send("Error -> " + err );
  } )
};

// R ~ Retrieve a specific Customer ~ by Id

// R ~ Retrieve a specific Customer ~ by Age
// U ~ Update/ Modify a Customer
// D ~ Delete/ Erase a specific Customer by ID 

