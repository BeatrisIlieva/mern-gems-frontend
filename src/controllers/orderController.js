const router = require("express").Router();

const orderManager = require("../managers/orderManager");

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await orderManager.getAll(userId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
