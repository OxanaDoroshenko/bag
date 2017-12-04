'use strict';

const Product = require('./product')
const Review = require('./review');
const Company = require('./company');

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, Company};
