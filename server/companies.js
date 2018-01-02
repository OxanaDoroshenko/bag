const db = require('../db') //this is required
const Company = require('../db/models/company');
// const Review = require('../db/models/review');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Company.findAll({
        // Add order conditions here....
        order: [
            ['time_start', 'ASC'],
        ],
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

// router.get('/:id', function(req, res, next) {
//     Product.findOne({
//         where:{id:req.params.id},
//         include: [Review]
//     })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

module.exports = router