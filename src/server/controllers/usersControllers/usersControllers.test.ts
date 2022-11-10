import type { Request, Response } from "express";
import mongoose from "mongoose";
import mockUser from "../../../mocks/mockUser.js";
import { registerUser } from "../../controllers/usersControllers/usersControllers.js";
import User from "../../../database/models/User/User.js";

afterAll(async () => {
  await mongoose.connection.close();
});

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnValue(mockUser),
};

describe("Given a userRegister controller", () => {
  describe("When it receives a response with victor credentials", () => {
    test("Then it should call it's method with a status 201", async () => {
      const expectedStatus = 201;

      const req: Partial<Request> = {
        body: mockUser,
      };

      User.create = jest.fn().mockResolvedValue(mockUser);
      await registerUser(req as Request, res as Response, null);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});
