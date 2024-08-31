const supertest = require("supertest");

const bcrypt = require("bcrypt");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");
const Bag = require("../../src/models/Bag");

const {
  EMAIL_ALREADY_EXISTS_ERROR_MESSAGE,
} = require("../../src/constants/email");

describe("userLoginInformationController", () => {
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

  const email = "test@email.com";
  const wrongEmail = "test2@email.com";
  const updatedEmail = "test3@email.com";
  const password = "123456Bb";
  const wrongPassword = "123456Bc";
  const newPassword = "123456Bt";

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

  test("Test user registration; It should populate user models; Expect success", async () => {
    const res = await request
      .post("/users-login-details/register")
      .send({ email, password });

    expect(res.status).toBe(201);

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const createdUserShippingDetails = await UserShippingDetails.findById(
      userId
    );

    const createdUserCardDetails = await UserCardDetails.findById(userId);

    expect(createdUserLoginDetails).not.toBeNull();
    expect(createdUserLoginDetails.email).toBe(email);

    expect(createdUserShippingDetails).not.toBeNull();

    expect(createdUserCardDetails).not.toBeNull();
  });

  test("Test user registration; It should not populate user models with duplicate email; Expect error", async () => {
    const res1 = await request
      .post("/users-login-details/register")
      .send({ email, password });

    expect(res1.status).toBe(201);

    const res2 = await request
      .post("/users-login-details/register")
      .send({ email, password });

    expect(res2.status).toBe(401);

    expect(res2.body.message).toBe(EMAIL_ALREADY_EXISTS_ERROR_MESSAGE);
  });

  test("Test user login; It should login user; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const res2 = await request
      .post("/users-login-details/login")
      .send({ email, password });

    expect(res2.status).toBe(200);
  });
});
