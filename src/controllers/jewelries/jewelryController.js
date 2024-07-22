const router = require("express").Router();
const jewelryManager = require("../../managers/jewelries/jewelryManager");

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

module.exports = router;
