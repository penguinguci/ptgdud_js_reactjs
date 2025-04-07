import User from "../models/User.js";

// lấy tất cả users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({message: "Không tìm thấy người dùng"});
        }
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

// lấy admin theo role admin
export const getAdminByRole = async (req, res) => {
    try {
        const {role} = req.params;
        const admin = await User.find({role: role});
        if (!admin) {
            return res.status(404).json({message: "Không tìm thấy admin"});
        }
        res.json(admin);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};