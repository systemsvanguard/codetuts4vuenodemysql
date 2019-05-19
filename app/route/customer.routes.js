module.exports = function(app) {
  const customers  = require('../controller/customer.controller.js');

  // configure CRUD for Customer object

  // C ~ Create a new Customer
  app.post('/api/customer', customers.create );

  // R ~ Retrieve ALL Customers
  app.post('/api/customers', customers.findAll );

  // R ~ Retrieve a specific Customer ~ by ID 
  app.post('/api/customer/:customerId', customers.findById );

  // R ~ Retrieve Customer by Age
  app.post('/api/customers/age/:age', customers.findByAge );

  // U ~ Update / Modify a specific Customer by ID
  app.post('/api/customer/:customerId', customers.update );

  // D ~ Delete / Erase a specific Customer by ID
  app.post('/api/customer/:customerId', customers.delete );

}