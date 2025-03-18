const supertest = require("supertest");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");

describe("userCardDetailsController", () => {
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
  const password = "123456Bb";
  const longCardNumber = "1234567890123456";
  const invalidLongCardNumber = "123456789012345";
  const cardHolder = "Test Test";
  const invalidCardHolder = "T1 T1";
  const cVVCode = "123";
  const invalidCVVCode = "12";
  const expiryDate = "10/25";
  const invalidExpiryDate = "10/21";

  afterEach(async () => {
    let userId;

    const user = await UserLoginDetails.findOne({ email });

    userId = user._id;

    await user.deleteOne();

    await UserCardDetails.findByIdAndDelete(userId);
    await UserShippingDetails.findByIdAndDelete(userId);

    await server.close();
  });

  test("Test update user card details with valid data; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.put(`/users-card-details/${userId}`).send({
      longCardNumber,
      cardHolder,
      cVVCode,
      expiryDate,
    });

    expect(res2.status).toBe(200);

    const updatedUserCardDetails = await UserCardDetails.findById(userId);

    expect(updatedUserCardDetails.longCardNumber).toBe(longCardNumber);
    expect(updatedUserCardDetails.cardHolder).toBe(cardHolder);
    expect(updatedUserCardDetails.cVVCode).toBe(cVVCode);
    expect(updatedUserCardDetails.expiryDate).toBe(expiryDate);
  });

  test("Test update user card details with invalid data; Expect errors", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.put(`/users-card-details/${userId}`).send({
      longCardNumber: invalidLongCardNumber,
      cardHolder: invalidCardHolder,
      cVVCode: invalidCVVCode,
      expiryDate: invalidExpiryDate,
    });

    expect(res2.status).toBe(401);

    const updatedUserCardDetails = await UserCardDetails.findById(userId);

    expect(updatedUserCardDetails.longCardNumber).not.toBe(
      invalidLongCardNumber
    );
    expect(updatedUserCardDetails.cardHolder).not.toBe(invalidCardHolder);
    expect(updatedUserCardDetails.cVVCode).not.toBe(invalidCVVCode);
    expect(updatedUserCardDetails.expiryDate).not.toBe(invalidExpiryDate);
  });

  test("Test get user card details; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.get(`/users-card-details/${userId}`);

    expect(res2.status).toBe(200);

    expect(res2.body).toBeDefined();
    expect(res2.body).toHaveProperty("_id");
    expect(res2.body._id).toBe(userId.toString());
  });
});
