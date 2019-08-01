const Sequelize = require('sequelize');
const db = require('../db');
//set a variable equal to a call to db.define
const Team = db.define(
  //first argument is the model name 
  'team',
  //second argument is object that defines the table's fields
    { name: {
      type: Sequelize.STRING,
      //customize your field name. determines the name of the column
      field: 'team_name' 
      }
    },
    { tableName: 'teams_of_football' }
  )

  module.export = Team;