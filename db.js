const Sequelized = require('sequelize');
const databaseUrl = 'postgres://postgres:<password>@localhost:5432/postgres'

//created a new instance of Sequelized with the constructor databaseUrl
const db = new Sequelized(databaseUrl)
//Call the sync method of the instance you created. 
//This method will sync the data in your database with the schema you are about to create.
db
  .sync()
  .then(() => console.log('Database schema is updated '))
  .catch(console.error)

  module.exports = db;