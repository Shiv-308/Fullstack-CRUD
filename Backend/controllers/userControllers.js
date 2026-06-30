import { User } from "../models/userModel.js";

async function createNewUser(req, res) {
    try{
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getUserById(req, res) {
    const { email } = req.params;
    const user = await User.findOne({ email });
    res.status(200).json(user);
}

async function getAllUsers(req, res) {
    const users = await User.find();
    res.status(200).json(users);
}

async function deleteUser(req, res) {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email });
    res.status(200).json(user);
}

async function updateUser(req, res) {
    const { email } = req.params;
    const user = await User.findOneAndUpdate({ email }, req.body);
    res.status(200).json(user);
}

export{
    createNewUser,
    getUserById,
    getAllUsers,
    deleteUser,
    updateUser
}
