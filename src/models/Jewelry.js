const mongoose = require("mongoose");

const jewelrySchema = new mongoose.Schema({
  _id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  firstImageUrl: {
    type: String,
    required: true,
  },
  secondImageUrl: {
    type: String,
    required: false,
  },
  category: {
    type: Number,
    ref: "Category",
    required: true,
  },
  color: {
    type: Number,
    ref: "Color",
    required: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Description is too short"],
    maxLength: [1000, "Description is too long"],
  },
});

jewelrySchema.pre("save", async function () {
  const currentId = await setID();

  this._id = currentId;
});

const jewelry = mongoose.model("Jewelry", jewelrySchema);

module.exports = jewelry;

const setID = async () => {
  try {
    let lastObj = await jewelry.findOne().sort({ _id: -1 });

    lastId = lastObj._id;

    nextId = lastId + 1;

    return nextId;
  } catch (err) {
    return 1;
  }
};
