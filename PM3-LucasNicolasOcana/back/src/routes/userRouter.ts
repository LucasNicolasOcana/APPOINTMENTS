import express from "express";
import * as userController from "../controllers/userControllers";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

export default router;
