const router = require("express").Router();

const userLoginDetailsManager = require("../managers/userLoginDetailsManager");
const userShippingDetailsManager = require("../managers/userShippingDetailsManager");
const userCardDetailsManager = require("../managers/userCardDetailsManager");

const { sendRegistrationEmail } = require("../mailer/mailer");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, userId } = await userLoginDetailsManager.register({
      email,
      password,
    });

    await userShippingDetailsManager.create({ _id: userId });

    await userCardDetailsManager.create({ _id: userId });

    sendRegistrationEmail(email);

    res.status(201).json({ token, userId });
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
    const result = await userLoginDetailsManager.getOne(userId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = { ...req.body };

  try {
    const result = await userLoginDetailsManager.login({ email, password });

    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.put("/email/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    const result = await userLoginDetailsManager.updateEmail(userId, data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.put("/password/:userId", async (req, res) => {
  const userId = req.params.userId;

  const data = { ...req.body };

  try {
    const result = await userLoginDetailsManager.updatePassword(userId, data);

    res.status(200).json(result);
  } catch (err) {
    console.log(err.message);

    res.status(401).json({
      message: err.message,
    });
  }
});

router.get("/logout/:userId", (req, res) => {
  res.status(204).json();
});

module.exports = router;
