const mongoose = require("mongoose");

const miniImageSchema = new mongoose.Schema({
  _id: {
    type: Number,
    default: 0,
  },

  title: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

miniImageSchema.pre("save", async function () {
  const currentId = await setID();

  this._id = currentId;
});

const miniImage = mongoose.model("MiniImage", miniImageSchema);

module.exports = miniImage;

const setID = async () => {
  try {
    let lastObj = await miniImage.findOne().sort({ _id: -1 });

    lastId = lastObj._id;

    nextId = lastId + 1;

    return nextId;
  } catch (err) {
    return 1;
  }
};
