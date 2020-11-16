const DevicesModel = require('../models/Devices');
const faker = require('faker');

const { randWords } = require('../constant');

const generateRandomJson = require('node-random-json')(
  {
    types: ['Object', 'Date', 'String', 'Number', 'Boolean'],
    maxDepth: 3,
    maxStrLen: 1,
    chars: randWords,
  });

const getDevices = async (req, res, next) => {
  try {
    const devices = await DevicesModel.find({});
    res.send(devices);
  } catch (e) {
    res.send(e.message).status(500);
  }
};

const updateByID = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const updated = await DevicesModel.updateOne({ _id }, { ...req.body });
    res.send(updated);
  } catch (e) {
    res.send(e.message).status(400);
  }

};

const createAll = async (req, res, next) => {
  const dataForCreate = [];
  for (let i = 0; i < 10; i++) {

    const data = {
      name: faker.commerce.productName(),
      definition: generateRandomJson('Object'),
      enable: faker.random.boolean(),
      tree_path: faker.system.semver(),
      attributes: generateRandomJson('Object'),
    }
    dataForCreate.push(data);
  }

  try {
    const created = await DevicesModel.create(dataForCreate);
    res.send(created);
  } catch (e) {
    res.send(e.message).status(400);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    const deleted = await DevicesModel.deleteMany({});
    res.send(deleted);
  } catch (e) {
    res.send(e.message).status(400);
  }
};

module.exports = {
  getDevices,
  createAll,
  deleteAll,
  updateByID,
};
