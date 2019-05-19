module.exports = ( sequelize, Sequelize ) => {
  const Customer = sequelize.define('custoomer', { 
    name : {type: Sequelize.STRINGF },
    age : {type: Sequelize.INTEGER }, 
    active: { type: Sequelize.BOOLEAN, defaultValue: false }, 
  } );

  return Customer;
}