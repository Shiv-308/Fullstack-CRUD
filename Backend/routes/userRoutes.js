import express from "express";
import { createNewUser, getUserById, getAllUsers, deleteUser, updateUser } from "../controllers/userControllers.js";
const router = express.Router();

router.post("/create", createNewUser);
router.get("/get/:id", getUserById);
router.get("/getAll", getAllUsers);
router.delete("/delete/:email", deleteUser);
router.put("/update/:email", updateUser);

export default router;
