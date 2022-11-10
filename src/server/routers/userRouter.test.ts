import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import connectDatabase from "../../database";
import app from "../../app.js";
import User from "../../database/models/User/User.js";
import type Credentials from "../controllers/usersControllers/types";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  await connectDatabase(server.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

beforeEach(async () => {
  // Limpia los tests
  await User.deleteMany();
});

describe("Given a POST /users/register endpoint", () => {
  describe("When it receives a request with username: 'victor', password: 1234 and email 'mar@io.com'", () => {
    test("Then it should respond with a 201 status and a new user victor", async () => {
      const expectedStatus = 201;

      const registerData: Credentials = {
        username: "victor",
        password: "1234",
        email: "vict@or.com",
      };

      const response = await request(app)
        .post("/users/register")
        .send(registerData) // Mete en el body de la request los valores q le digamos
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("newUser");
    });
  });
});
