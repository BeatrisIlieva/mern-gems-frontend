const supertest = require("supertest");

const bcrypt = require("bcrypt");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");

describe("userShippingDetailsController", () => {
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
  const firstName = "TestName";
  const invalidFirstName = "Test1";
  const lastName = "TestName";
  const invalidLastName = "Test1";
  const country = "Test";
  const invalidCountry = "Test1";
  const city = "Test";
  const invalidCity = "Test1";
  const street = "Test Test 1";
  const invalidStreet = "$";
  const apartment = "1A";
  const invalidApartment = "$";
  const zipCode = "T 1111";
  const invalidZipCode = "1";
  const phoneNumber = "0123456789";
  const invalidPhoneNumber = "0123456789T";

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

  test("Test update user shipping details with valid data; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.put(`/users-shipping-details/${userId}`).send({
      firstName,
      lastName,
      country,
      city,
      street,
      apartment,
      zipCode,
      phoneNumber,
    });

    expect(res2.status).toBe(200);

    const updatedUserShippingDetails = await UserShippingDetails.findById(
      userId
    );

    expect(updatedUserShippingDetails.firstName).toBe(firstName);
    expect(updatedUserShippingDetails.lastName).toBe(lastName);
    expect(updatedUserShippingDetails.country).toBe(country);
    expect(updatedUserShippingDetails.city).toBe(city);
    expect(updatedUserShippingDetails.street).toBe(street);
    expect(updatedUserShippingDetails.apartment).toBe(apartment);
    expect(updatedUserShippingDetails.zipCode).toBe(zipCode);
    expect(updatedUserShippingDetails.phoneNumber).toBe(phoneNumber);
  });

  test("Test update user address details with invalid data; Expect errors", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.put(`/users-shipping-details/${userId}`).send({
      firstName: invalidFirstName,
      lastName: invalidLastName,
      country: invalidCountry,
      city: invalidCity,
      street: invalidStreet,
      apartment: invalidApartment,
      zipCode: invalidZipCode,
      phoneNumber: invalidPhoneNumber,
    });

    expect(res2.status).toBe(401);

    const updatedUserShippingDetails = await UserShippingDetails.findById(
      userId
    );

    expect(updatedUserShippingDetails.firstName).not.toBe(firstName);
    expect(updatedUserShippingDetails.lastName).not.toBe(lastName);
    expect(updatedUserShippingDetails.country).not.toBe(country);
    expect(updatedUserShippingDetails.city).not.toBe(city);
    expect(updatedUserShippingDetails.street).not.toBe(street);
    expect(updatedUserShippingDetails.apartment).not.toBe(apartment);
    expect(updatedUserShippingDetails.zipCode).not.toBe(zipCode);
    expect(updatedUserShippingDetails.phoneNumber).not.toBe(phoneNumber);
  });
});
