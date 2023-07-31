const express= require('express');
const monthlyResultsController = require('../controllers/monthlyResultsController');
const descriptionsController = require('../controllers/descriptionsController');


const router = express.Router();

router.get('/getDescription/:id', descriptionsController.getDescription);

router.get('/',  monthlyResultsController.monthlyResult_getAll );



module.exports = router;