const router = require("express").Router();
const collectionManager = require("../../managers/jewelries/collectionManager");

router.get("/:collectionId/:skip/:limit", async (req, res) => {
  const collectionId = Number(req.params.collectionId);
  const skip = Number(req.params.skip);
  const limit = Number(req.params.limit);

  const data = { collectionId, skip, limit };

  try {
    let result = await collectionManager.getAll(data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
