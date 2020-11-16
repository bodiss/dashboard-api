const express = require('express');
const router = express.Router();

/**
 * Controllers
 */
const DeviceController = require('../controllers/Devices');
const VocabularyController = require('../controllers/Vocabulary');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * Devices
 */
router.get('/devices', DeviceController.getDevices);
router.get('/createDevices', DeviceController.createAll);
router.get('/deleteDevices', DeviceController.deleteAll);
router.put('/devices/:id', DeviceController.updateByID);


/**
 * Vocabulary
 */
router.get('/vocabulary', VocabularyController.getLabels);
router.post('/vocabulary', VocabularyController.createLabels);
router.delete('/vocabulary/:id', VocabularyController.deleteByKey);
router.put('/vocabulary/:id', VocabularyController.updateById);

module.exports = router;
