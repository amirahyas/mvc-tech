// const { Sequelize } = require('sequelize');

console.log("i am here")

async function init() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    }
    
    init();

