const genericCrud = require("./generic.controller");
const { Ad } = require("../model");

module.exports = {
  ...genericCrud(Ad),
};
