const router = require("express").Router();

const jewelryManager = require("../managers/jewelryManager");

router.get("/:categoryId", async (req, res) => {
  const categoryId = Number(req.params.categoryId);

  try {
    const result = await jewelryManager.getAll(categoryId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

// router.get("/:jewelryId", async (req, res) => {
//   const jewelryId = Number(req.params.jewelryId);

//   try {
//     const result = await jewelryManager.getOne(jewelryId);

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);

//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

// router.get("/:collectionId/:categoryId/:skip/:limit", async (req, res) => {
//   const collectionId = Number(req.params.collectionId);

//   const categoryId = req.params.categoryId
//     ? Number(req.params.categoryId)
//     : null;

//   const skip = Number(req.params.skip);

//   const limit = Number(req.params.limit);

//   const data = { collectionId, categoryId, skip, limit };

//   try {
//     let result = await jewelryManager.getAll(data);

//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);

//     res.status(401).json({
//       message: err.message,
//     });
//   }
// });

module.exports = router;
