const Sequelize = require('sequelize')
const db = require('../db')


const Question = db.define('question', {
    name: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      defaultVaule: 1
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    date: {
      type: Sequelize.DATE,
    },
    votes: {
      type: Sequelize.ARRAY(Sequelize.INTEGER), // Array of integers
      defaultValue: []
    },
    winner: {
      type: Sequelize.INTEGER,
    },
    winningSongId: {
      type: Sequelize.INTEGER,
    },

  })


module.exports = Question
