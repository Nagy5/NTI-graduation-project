const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.get('/all', servicesController.getAllServices);

router.post('/add', servicesController.addService);

router.delete('/delete/:id', servicesController.deleteService);

module.exports = router;
