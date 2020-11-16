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
  console.log('Devices');
  const devices = await DevicesModel.find({});
  res.send(devices);
};

const updateByID = async (req, res, next) => {
  const _id = req.params.id;
  await DevicesModel.updateOne({ _id }, { ...req.body });
  res.send({ status: 'OK' });
};

const createAll = async (req, res, next) => {
  const dataForCreate = [];
  for (let i = 0; i < 10; i++) {

    const data = {
      name: faker.commerce.productName(),
      definition: generateRandomJson('Object'),
      enable: faker.random.boolean(),
    }
    dataForCreate.push(data);
  }

  await DevicesModel.create(dataForCreate);
  res.send({ status: 'OK' });
};

const deleteAll = async (req, res, next) => {
  await DevicesModel.deleteMany({});
  res.send({ status: 'OK' });
};

module.exports = {
  getDevices,
  createAll,
  deleteAll,
  updateByID,
};
