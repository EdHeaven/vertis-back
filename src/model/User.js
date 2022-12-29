const {
    model,
    Schema,
  } = require("mongoose");
  
  const schema = new Schema({
    name: {
      type: String,
      default: "",
    },
    surname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: ''
    }
  });
  
  module.exports = model("User", schema);
  