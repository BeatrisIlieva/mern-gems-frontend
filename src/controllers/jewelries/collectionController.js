const router = require("express").Router();
const collectionManager = require("../../managers/jewelries/collectionManager");

router.get("/:collectionId", async (req, res) => {
  const collectionId = Number(req.params.collectionId);

  try {
    let result = await collectionManager.findAll(collectionId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
