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

// thêm user
export const addUser = async (req, res) => {
    try {
        console.log("Received body: ", req.body);

         if (!req.body.fullName || !req.body.phone || !req.body.email) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        
        const existingUser = await User.findOne({
            $or: [
                {email: req.body.email},
                {phone: req.body.phone}
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                message: existingUser.email === req.body.email
                    ? "Email already exists"
                    : "Phone number already exists"
            });
        }

        const user = new User({
            fullName: req.body.fullName,
            phone: req.body.phone,
            email: req.body.email.toLowerCase(),
            birthDate: req.body.birthDate || null,
            gender: req.body.gender,
            address: req.body.address || "",
            avatar: req.body.avatar || "",
            role: "user",
            status: "Active",
            password: req.body.password || "tranvu23405"
        });

        const newUser = await user.save();
        console.log("User created successfully:", newUser);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({
            message: err.message,
            errors: err.errors ? Object.values(err.errors).map(e => e.message) : null
        });
    }
};

// update user
export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        Object.assign(user, req.body);
        const updateUser = await user.save();
        res.json(updateUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

// delete user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        await User.deleteOne({_id: req.params.id});
        res.json({message: "User deleted"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}