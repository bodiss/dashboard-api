const express = require('express');
const router = express.Router();

const DeviceController = require('../controllers/devices');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/devices', DeviceController.getDevices);
router.get('/createDevices', DeviceController.createAll);
router.get('/deleteDevices', DeviceController.deleteAll);
router.put('/devices/:id', DeviceController.updateByID);

module.exports = router;
