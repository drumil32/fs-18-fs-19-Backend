import productModel from "../models/productModel.js";
import userModel from "../models/userModel.js";

export async function getAllusers(req, res) {
    const dataFromDB = await userModel.find();
    res.send(dataFromDB);
}

export async function saveNewUser(req, res) {
    try {
        const dataToSave = new userModel(req.body);
        const newUser = await dataToSave.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
}

export async function deleteUser(req, res) {
    const id = req.params.id;
    //   const { id } = req.params;

    const deletedData = await userModel.findByIdAndDelete(id);
    if (deletedData) {
        res.status(200).send("User Deleted");
    } else {
        res.status(500).send("User could not be deleted");
    }
}

export async function updateUser(req, res) {
    const { id } = req.params;
    const updatedData = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (updatedData) {
        res.json({ message: "Success", updatedData });
    } else {
        res.status(500).send("User could not be updated");
    }
}

//Product Add
export async function saveNewProduct(req, res) {
    try {
        const dataToSave = new productModel(req.body);
        const newProduct = await dataToSave.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).send("Error: " + err);
    }
}

export async function updateUserAge(req, res) {
    const { id } = req.params;
    const updatedUser = await userModel.findByIdAndUpdate(id, { age: req.body.age }, {
        new: true,
    });

    if (updatedUser) {
        res.json({ message: "User is updated successfully.", updatedUser });
    } else {
        res.status(500).send("User could not be updated");
    }
}