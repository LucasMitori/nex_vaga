import { Router } from "express";
import "dotenv/config";
import { ensureAuthMiddleware } from "../middlewares/ensure.authorization.middleware";
import { ensureDataValidationMiddleware } from "../middlewares/ensureDataValidation.middleware";
import { ensureInputIsUuidMiddleware } from "../middlewares/ensureInputIsUuid.middleware";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { ensureUserIsAdmin } from "../middlewares/ensureUserIsAdm.middleware";
import { ensureValidRequestInputMiddleware } from "../middlewares/ensureValidRequestInput.middleware";
import { userRequestSchema } from "../schemas/user.schemas";
import {
  deleteUserAccountController,
  getUploadImageController,
  listUsersController,
  registerUserController,
  retrieveUserProfileController,
  updateUserController,
  uploadImageUserController,
} from "../controllers/user.controllers";

export const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataValidationMiddleware(userRequestSchema),
  registerUserController
);

usersRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureUserIsAdmin,
  listUsersController
);

usersRoutes.get(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureAuthMiddleware,
  ensureUserExistsMiddleware,
  retrieveUserProfileController
);

usersRoutes.patch(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureAuthMiddleware,
  ensureValidRequestInputMiddleware,
  updateUserController
);

usersRoutes.get("/upload/:id/:public_id", getUploadImageController);

usersRoutes.delete(
  "/:id",
  ensureInputIsUuidMiddleware,
  ensureUserExistsMiddleware,
  ensureAuthMiddleware,
  deleteUserAccountController
);
