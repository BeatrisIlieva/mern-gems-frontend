const router = require("express").Router();
const categoryManager = require("../../managers/jewelries/categoryManager");

router.get("/:categoryId/:skip/:limit", async (req, res) => {
  const categoryId = Number(req.params.categoryId);
  const skip = Number(req.params.skip);
  const limit = Number(req.params.limit);

  const data = { categoryId, skip, limit };

  try {
    let result = await categoryManager.findAll(data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
