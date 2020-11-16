const mongoose = require('mongoose');
const Devices = require('../models/devices');

const getDevices = async (req, res, next) => {
  const devices = await Devices.find({});
  res.send(devices);
};

const updateByID = async (req, res, next) => {
  res.send({ status: 'OK' });
};

const deleteAll = async (req, res, next) => {
  res.send({ status: 'OK' });
};

const createAll = async (req, res, next) => {

  res.send({ status: 'OK' });
};

module.exports = {
  getDevices,
};
