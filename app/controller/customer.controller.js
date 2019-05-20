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
exports.findById = (req, res) => {
  Customer.findById(req.params.customerId).then(customer => {
    res.send(customer);
  } ).catch(err => {
    res.status(500).send("Error -> " + err );
  })
};

// R ~ Retrieve a specific Customer ~ by Age
exports.findByAge = (req, res) => {
  Customer.findAll({ 
    where: { age: req.params.age } 
  }).then(customers => {res.send(customers)} ).catch(err => {
    res.status(500).send("Error -> " + err);
  })
};

// U ~ Update/ Modify a Customer
exports.update = (req, res) => {
  var customer = req.body;
  const id = req.params.customerId;
  Customer.update({
    name: req.body.name,
    age: req.body.age,
    active: req.body.active
  }, {where: {id: req.params.customerId } }   ).then(() => {
    res.status(200).send(customer);
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  } )
};

// D ~ Delete/ Erase a specific Customer by ID 
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: {id: id}
  }).then( () => {
    res.status(200).send('Customer has been deleted!');
  }  ).catch(err => {
    res.status(500).send("Error -> " + err );
  } );
};

