const router = require("express").Router();
const jewelryManager = require("../managers/jewelryManager");

router.get("/by-category/:categoryId", async (req, res) => {
  const categoryId = Number(req.params.categoryId);

  try {
    let result = await jewelryManager.findAll(categoryId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/by-collection/:collectionId", async (req, res) => {
  const collectionId = Number(req.params.collectionId);

  try {
    let result = await jewelryManager.findAll(collectionId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/by-jewelry/:jewelryId", async (req, res) => {
  const jewelryId = Number(req.params.jewelryId);

  try {
    const result = await jewelryManager.findOne(jewelryId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
