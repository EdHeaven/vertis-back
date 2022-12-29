const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    title: {
        type: String,
        default: "",
    },
    ads: [
      {
        type: ObjectId,
        ref: "Ad",
      },
    ],
  });
  
  module.exports = model("Category", schema);
  