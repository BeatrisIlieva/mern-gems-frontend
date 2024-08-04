const router = require("express").Router();

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    await userCardDetailsManager.findByIdAndUpdate(userId, data);

    const order = await orderManager.create(userId);

    res.status(201).json({ order });
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
