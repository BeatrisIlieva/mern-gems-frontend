const router = require("express").Router();

router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
  
    try {
      await wishlistManager.getAll(userId);
  
      res.status(200).json();
    } catch (err) {
      console.log(err.message);
  
      res.status(401).json({
        message: err.message,
      });
    }
  });

router.get("/add/:jewelryId/:userId", async (req, res) => {
  const userId = req.params.userId;

  const jewelryId = Number(req.params.jewelryId);

  try {
    await wishlistManager.create({
      userId,
      jewelryId,
    });

    res.status(204).json();
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.delete("/delete/:jewelryId/:userId", async (req, res) => {
  const userId = req.params.userId;

  const jewelryId = Number(req.params.jewelryId);

  try {
    await wishlistManager.delete({
      userId,
      jewelryId,
    });

    res.status(204).json();
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
