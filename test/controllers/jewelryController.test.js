const supertest = require("supertest");

const { app, server } = require("../../src/index");

const request = supertest(app);

const { connectDB, disconnectDB } = require("../database");

describe("jewelryController", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
  });

  beforeEach(async () => {
    jest.setTimeout(30000);
  });

  const categoryId = 1;
  const invalidCategoryId = 8;
  const colorId = 1;

  afterEach(async () => {
    await server.close();
  });

  test("Test find all jewelries by category; Expect success", async () => {
    const res = await request.get(`/jewelries/${categoryId}/${colorId}`);

    expect(res.status).toBe(200);

    const responseBody = res.body;
    expect(responseBody).toBeInstanceOf(Array);

    responseBody.forEach((item) => {
      expect(item).toHaveProperty("firstImageUrl");
      expect(item).toHaveProperty("_id");
      expect(item).toHaveProperty("category");
      expect(item).toHaveProperty("color");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("secondImageUrl");
      expect(item).toHaveProperty("inventories");
      expect(item).toHaveProperty("title");
    });
  });

  test("Test find all jewelries by invalid category; Expect errors", async () => {
    const res = await request.get(
      `/jewelries/${invalidCategoryId}/${colorId}`
    );

    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Invalid Url");
  });
});
