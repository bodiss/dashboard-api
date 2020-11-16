const VocabularyModel = require('../models/Vocabulary');

const getLabels = async (req, res, next) => {
  const labels = await VocabularyModel.find({});
  res.send(labels);
};

const createLabels = async (req, res, next) => {
  try {
    const createdLabel = await VocabularyModel.create({ ...req.body });
    res.send(createdLabel);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const updateById = async (req, res, next) => {
  const _id = req.params.id;
  const createdLabel = await VocabularyModel.updateOne({ _id }, { ...req.body });
  res.send(createdLabel);
};

const deleteByKey = async (req, res, next) => {
  const _id = req.params.id;
  const deleted = await VocabularyModel.deleteOne({ _id });
  res.send(deleted);
};

module.exports = {
  getLabels,
  createLabels,
  updateById,
  deleteByKey,
};
