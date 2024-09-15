const supertest = require("supertest");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");
const Bag = require("../../src/models/Bag");
const Order = require("../../src/models/Order");

const { sendOrderConfirmationEmail } = require("../../src/mailer/mailer");

jest.mock("../../src/mailer/mailer", () => ({
  ...jest.requireActual("../../src/mailer/mailer"),
  sendOrderConfirmationEmail: jest.fn(),
}));

describe("paymentController", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  });

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  const jewelryId = 1;
  const size = "15.2 cm";
  const email = "test@email.com";
  const password = "123456Bb";
  const longCardNumber = "1234567890123456";
  const cardHolder = "Test Test";
  const cVVCode = "123";
  const expiryDate = "10/30";
  const selectedLanguage = "English";

  afterEach(async () => {
    let userId;

    const user = await UserLoginDetails.findOne({ email });

    userId = user._id;

    await user.deleteOne();

    await UserShippingDetails.findByIdAndDelete(userId);
    await UserCardDetails.findByIdAndDelete(userId);
    await Bag.findOneAndDelete({ user: userId });
    await Order.findOneAndDelete({ user: userId });

    await server.close();
  });

  test("Test complete transaction with valid data; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password, selectedLanguage });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    await request.post(`/bags/add/${jewelryId}/${userId}`).send({
      size,
    });

    const res3 = await request.put(`/payments/${userId}`).send({
      selectedLanguage
    });

    expect(res3.status).toBe(204);

    expect(sendOrderConfirmationEmail).toHaveBeenCalledTimes(1);

    const userShippingDetails = await UserShippingDetails.findById(userId);

    expect(sendOrderConfirmationEmail).toHaveBeenCalledWith(
      email,
      userShippingDetails.firstName,
      selectedLanguage
    );
  });
});
