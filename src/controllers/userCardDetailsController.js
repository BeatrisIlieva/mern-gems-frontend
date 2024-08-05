const router = require("express").Router();

const userCardDetailsManager = require("../managers/userCardDetailsManager");

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    const result = await userCardDetailsManager.update(userId, data);

    res.status(201).json({ result });
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
