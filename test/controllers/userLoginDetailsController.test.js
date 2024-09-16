const supertest = require("supertest");

const bcrypt = require("bcrypt");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");

const { sendRegistrationEmail } = require("../../src/mailer/mailer");

jest.mock("../../src/mailer/mailer", () => ({
  ...jest.requireActual("../../src/mailer/mailer"),
  sendRegistrationEmail: jest.fn(),
}));

const {
  EMAIL_ALREADY_EXISTS_ERROR_MESSAGE,
} = require("../../src/constants/email");

describe("userLoginDetailsController", () => {
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
  const selectedLanguage = "English";

  afterEach(async () => {
    let userId;

    const user = await UserLoginDetails.findOne({ email });

    if (user) {
      userId = user._id;

      await user.deleteOne();
    } else {
      updatedUser = await UserLoginDetails.findOne({ email: updatedEmail });

      userId = updatedUser._id;

      await updatedUser.deleteOne();
    }

    await UserShippingDetails.findByIdAndDelete(userId);
    await UserCardDetails.findByIdAndDelete(userId);

    await server.close();
  });

  test("Test user registration; It should populate user models; Expect success", async () => {
    const res = await request
      .post("/users-login-details/register")
      .send({ email, password, selectedLanguage });

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

    expect(sendRegistrationEmail).toHaveBeenCalledTimes(1);

    expect(sendRegistrationEmail).toHaveBeenCalledWith(email, selectedLanguage);
  });

  test("Test user registration; It should not populate user models with duplicate email; Expect error", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password, selectedLanguage });

    const res2 = await request
      .post("/users-login-details/register")
      .send({ email, password });

    expect(res2.status).toBe(401);

    expect(res2.body.message).toBe(EMAIL_ALREADY_EXISTS_ERROR_MESSAGE);
  });

  test("Test user login; It should login user; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password, selectedLanguage });

    const res2 = await request
      .post("/users-login-details/login")
      .send({ email, password });

    expect(res2.status).toBe(200);
  });

  test("Test user login with wrong password; It should not login user; Expect error", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const res2 = await request
      .post("/users-login-details/login")
      .send({ email, wrongPassword });

    expect(res2.status).toBe(401);
  });

  test("Test user login with wrong email; It should not login user; Expect error", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const res2 = await request
      .post("/users-login-details/login")
      .send({ wrongEmail, password });

    expect(res2.status).toBe(401);
  });

  test("Test update user email with valid password; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request
      .put(`/users-login-details/email/${userId}`)
      .send({ email: updatedEmail, password });

    expect(res2.status).toBe(200);

    const updatedUserLoginDetails = await UserLoginDetails.findById(userId);

    expect(updatedUserLoginDetails.email).toBe(updatedEmail);
  });

  test("Test update user email with invalid password; Expect error", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request
      .put(`/users-login-details/email/${userId}`)
      .send({ email: updatedEmail, password: wrongPassword });

    expect(res2.status).toBe(401);

    const updatedUserLoginDetails = await UserLoginDetails.findById(userId);

    expect(updatedUserLoginDetails.email).not.toBe(updatedEmail);
    expect(updatedUserLoginDetails.email).toBe(email);
  });

  test("Test update user password with valid current password; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request
      .put(`/users-login-details/password/${userId}`)
      .send({ email, password, newPassword });

    expect(res2.status).toBe(200);

    const updatedUserLoginDetails = await UserLoginDetails.findById(userId);

    const isChanged = await bcrypt.compare(
      newPassword,
      updatedUserLoginDetails.password
    );

    expect(isChanged).toBe(true);
  });

  test("Test update user password with invalid current password; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request
      .put(`/users-login-details/password/${userId}`)
      .send({ email, wrongPassword, newPassword });

    expect(res2.status).toBe(401);

    const updatedUserLoginDetails = await UserLoginDetails.findById(userId);

    const isChanged = await bcrypt.compare(
      newPassword,
      updatedUserLoginDetails.password
    );

    expect(isChanged).toBe(false);
  });

  test("Test get user login details; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.get(`/users-login-details/${userId}`);

    expect(res2.status).toBe(200);

    expect(res2.body).toBeDefined();
    expect(res2.body).toHaveProperty("_id");
    expect(res2.body._id).toBe(userId.toString());
  });
});
