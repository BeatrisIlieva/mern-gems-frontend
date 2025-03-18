const router = require("express").Router();

const Category = require("../models/Category");
const Color = require("../models/Color");

const jewelryManager = require("../managers/jewelryManager");

router.get("/:categoryId/:colorId", async (req, res) => {
  const categoryId = Number(req.params.categoryId);

  const colorId = Number(req.params.colorId);

  try {
    const category = await Category.findById(categoryId);

    const color = await Color.findById(colorId);

    if (!category || !color) {
      throw new Error("Invalid Url");
    } else {
      const result = await jewelryManager.getOne(categoryId, colorId);

      res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
