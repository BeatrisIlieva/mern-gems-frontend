const router = require("express").Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, userId } = await userManager.register({
      email,
      password,
    });

    await userManager.createUserShippingDetails({ _id: userId });

    await userCardDetailsManager.create({ _id: userId });

    // sendRegistrationEmail(email);

    res.status(201).json({ token, userId });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: err.message,
    });
  }
});

module.exports = router;
