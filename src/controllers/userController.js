const router = require("express").Router();

const userManager = require("../managers/userManager");
















router.delete("/delete/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await userManager.delete(userId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
