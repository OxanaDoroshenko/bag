'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Company = db.define('companies', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isCurrent: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
});

module.exports = Company;