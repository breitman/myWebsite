const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },

  imageURl: {
    type: Sequelize.STRING
  },
  href: {
    type: Sequelize.TEXT
  }
})

module.exports = Project

/**
 * instanceMethods
 */
