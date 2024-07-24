const router = require("express").Router();
const jewelryManager = require("../managers/jewelryManager");

router.get("/:jewelryId", async (req, res) => {
  const jewelryId = Number(req.params.jewelryId);

  try {
    const result = await jewelryManager.getOne(jewelryId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/categories/:categoryId/:skip/:limit", async (req, res) => {
  const categoryId = Number(req.params.categoryId);
  const skip = Number(req.params.skip);
  const limit = Number(req.params.limit);

  const data = { categoryId, skip, limit };

  try {
    let result = await jewelryManager.getAllByCategory(data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/collections/:collectionId/:skip/:limit", async (req, res) => {
  const collectionId = Number(req.params.collectionId);
  const skip = Number(req.params.skip);
  const limit = Number(req.params.limit);

  const data = { collectionId, skip, limit };

  try {
    let result = await jewelryManager.getAllByCollection(data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
