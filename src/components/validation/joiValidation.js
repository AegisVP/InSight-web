const Joi = require('joi');

export const schema = Joi.object({
  height: Joi.number().integer().min(100).max(250).required(),
  age: Joi.number().integer().min(18).max(100).required(),
  currentWeight: Joi.number().min(20).max(500).required(),
  desireWeight: Joi.number().min(20).max(500).required(),
  bloodType: Joi.number().integer().valid(1, 2, 3, 4).required(),
});
