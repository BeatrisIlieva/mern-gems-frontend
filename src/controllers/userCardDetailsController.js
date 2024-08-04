const router = require("express").Router();

const orderManager = require("../managers/orderManager");
const userCardDetailsManager = require("../managers/userCardDetailsManager");

router.put("/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    await userCardDetailsManager.update(userId, data);

    const order = await orderManager.create(userId);

    res.status(201).json({ order });
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await userCardDetailsManager.getOne(userId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
