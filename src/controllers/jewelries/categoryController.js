const router = require("express").Router();
const categoryManager = require("../../managers/jewelries/categoryManager");

router.get("/:categoryId", async (req, res) => {
  const categoryId = Number(req.params.categoryId);

  try {
    let result = await categoryManager.findAll(categoryId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
