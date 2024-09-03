import express from "express";
import {
    deleteUser,
    getAllusers,
    saveNewUser,
    updateUser,
    saveNewProduct,
    updateUserAge,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllusers);

router.post("/newUser", saveNewUser);

router.delete("/deleteUser/:id", deleteUser);

router.put("/updateUser/:id", updateUser);

router.post("/newProduct", saveNewProduct);

router.patch('/updateUserAge/:id',updateUserAge);

export default router;