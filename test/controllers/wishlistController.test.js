const supertest = require("supertest");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

const Wishlist = require("../../src/models/Wishlist");
const UserLoginDetails = require("../../src/models/UserLoginDetails");
const UserShippingDetails = require("../../src/models/UserShippingDetails");
const UserCardDetails = require("../../src/models/UserCardDetails");

const { DEFAULT_ADD_QUANTITY } = require("../../src/constants/bag");

describe("wishlistController", () => {
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
  const categoryId = 1;
  const colorId = 1;

  afterEach(async () => {
    let userId;

    const user = await UserLoginDetails.findOne({ email });

    userId = user._id;

    await user.deleteOne();

    await UserShippingDetails.findByIdAndDelete(userId);
    await UserCardDetails.findByIdAndDelete(userId);
    await Wishlist.findOneAndDelete({user: userId})

    await server.close();
  });

  test("Test add to wishlist; Expect success", async () => {
    await request
      .post("/users-login-details/register")
      .send({ email, password });

    const createdUserLoginDetails = await UserLoginDetails.findOne({
      email,
    });

    const userId = createdUserLoginDetails._id;

    const res2 = await request.get(`/wishlists/add/${categoryId}/${colorId}/${userId}`)

    expect(res2.status).toBe(204);

    const wishlist = await Wishlist.find({ user: userId });

    expect(wishlist).not.toBe.null();
  });


//   test("Test delete shopping bag; Expect success", async () => {
//     const inventoryItem = await Inventory.findOne({ jewelry: jewelryId });

//     const initialInventoryQuantity = inventoryItem.quantity;

//     await request
//       .post("/users-login-details/register")
//       .send({ email, password });

//     const createdUserLoginDetails = await UserLoginDetails.findOne({
//       email,
//     });

//     const userId = createdUserLoginDetails._id;

//     await request.post(`/bags/add/${jewelryId}/${userId}`).send({
//       size,
//     });

//     const createdBag = await Bag.findOne({ user: userId });

//     const bagId = createdBag._id;

//     await request.put(`/bags/increase/${bagId}`);

//     const res3 = await request.delete(`/bags/delete/${bagId}`);

//     expect(res3.status).toBe(204);

//     const bag = await Bag.find({ user: userId });

//     expect(bag).toStrictEqual([]);

//     const updatedInventoryItem = await Inventory.findOne({
//       jewelry: jewelryId,
//     });

//     const updatedInventoryQuantity = updatedInventoryItem.quantity;

//     expect(updatedInventoryQuantity).toBe(initialInventoryQuantity);
//   });

//   test("Test get all shopping bags; Expect success", async () => {
//     await request
//       .post("/users-login-details/register")
//       .send({ email, password });

//     const createdUserLoginDetails = await UserLoginDetails.findOne({
//       email,
//     });

//     const userId = createdUserLoginDetails._id;

//     const res2 = await request.get(`/bags/${userId}`);

//     expect(res2.status).toBe(200);

//     const responseBody = res2.body;
//     expect(responseBody).toBeInstanceOf(Array);

//     responseBody.forEach((item) => {
//       expect(item).toHaveProperty("bagId");
//       expect(item).toHaveProperty("inventoryId");
//       expect(item).toHaveProperty("user");
//       expect(item).toHaveProperty("jewelryId");
//       expect(item).toHaveProperty("jewelryTitle");
//       expect(item).toHaveProperty("firstImageUrl");
//       expect(item).toHaveProperty("quantity");
//       expect(item).toHaveProperty("maxQuantity");
//       expect(item).toHaveProperty("categoryTitle");
//       expect(item).toHaveProperty("inventoryQuantity");
//       expect(item).toHaveProperty("size");
//       expect(item).toHaveProperty("price");
//     });
//   });
});
