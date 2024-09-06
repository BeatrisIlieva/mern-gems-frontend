const router = require("express").Router();

const wishlistManager = require("../managers/wishlistManager");

router.get("/add/:categoryId/:colorId/:userId", async (req, res) => {
  const userId = req.params.userId;

  const categoryId = Number(req.params.categoryId);

  const colorId = Number(req.params.colorId);

  try {
    await wishlistManager.create({
      userId,
      categoryId,
      colorId,
    });

    res.status(204).json();
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await wishlistManager.getAll(userId);

    res.status(200).json({ result });
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.delete("/delete/:categoryId/:colorId/:userId", async (req, res) => {
  const userId = req.params.userId;

  const categoryId = Number(req.params.categoryId);

  const colorId = Number(req.params.colorId);

  try {
    await wishlistManager.delete({
      userId,
      categoryId,
      colorId,
    });

    res.status(204).json();
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
