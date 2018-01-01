'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Company = db.define('companies', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitle: {
        type: Sequelize.STRING,
        allowNull: true
    },
    position: {
        type: Sequelize.STRING,
        allowNull: true
    },
    skills: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isCurrent: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    img:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    siteUrl:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    text:{
        type: Sequelize.TEXT,
        allowNull: true,
    },
    time_start:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    time_end:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Company;
