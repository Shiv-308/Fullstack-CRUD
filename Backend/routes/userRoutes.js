import express from "express";
import { createNewUser, getUserById, getAllUsers, deleteUser, updateUser } from "../controllers/userControllers.js";
const router = express.Router();

router.post("/create", createNewUser);
router.get("/get/:id", getUserById);
router.get("/getAll", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

export default router;