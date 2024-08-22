const router = require("express").Router();

const Category = require("../models/Category");
const Color = require("../models/Color");

const jewelryManager = require("../managers/jewelryManager");

router.get("/:categoryTitle/:colorTitle", async (req, res) => {
  const categoryTitle = req.params.categoryTitle;

  const colorTitle = req.params.colorTitle;

  try {
    const category = await Category.findOne({ title: categoryTitle });

    const color = await Color.findOne({ title: colorTitle });

    if (!category || !color) {
      throw new Error("Invalid Url");
    } else {
      const categoryId = category._id;

      const colorId = color._id;

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
