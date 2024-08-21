const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  _id: {
    type: Number,
    default: 0,
  },

  title: {
    type: String,
    required: true,
  },
});

colorSchema.pre("save", async function () {
  const currentId = await setID();

  this._id = currentId;
});

const color = mongoose.model("Color", colorSchema);

module.exports = color;

const setID = async () => {
  try {
    let lastObj = await color.findOne().sort({ _id: -1 });

    lastId = lastObj._id;

    nextId = lastId + 1;

    return nextId;
  } catch (err) {
    return 1;
  }
};
