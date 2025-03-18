const supertest = require("supertest");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");
const Bag = require("../../src/models/Bag");

describe("orderController", () => {
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

  afterEach(async () => {
    let userId;

    const user = await UserLoginDetails.findOne({ email });

    userId = user._id;

    await user.deleteOne();

    await UserShippingDetails.findByIdAndDelete(userId);
    await UserCardDetails.findByIdAndDelete(userId);
    await Bag.findOneAndDelete({ user: userId });

    await server.close();
  });

  test("Test complete transaction with valid data; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    await request.post(`/bags/add/${jewelryId}/${userId}`).send({
      size,
    });

    const res3 = await request.get(`/orders/create/${userId}`);

    expect(res3.status).toBe(201);
  });

  test("Test get all orders; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    await request.post(`/bags/add/${jewelryId}/${userId}`).send({
      size,
    });

    const res3 = await request.get(`/orders/${userId}`);

    expect(res3.status).toBe(200);

    const responseBody = res3.body;
    expect(responseBody).toBeInstanceOf(Array);

    responseBody.forEach((item) => {
      expect(item).toHaveProperty("jewelries");
      expect(item).toHaveProperty("totalPrice");
      expect(item).toHaveProperty("createdAt");
      expect(item).toHaveProperty("status");
    });
  });
});
