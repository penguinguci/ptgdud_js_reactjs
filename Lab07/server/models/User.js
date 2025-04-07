import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, 'Full name is required'] },
  phone: { type: String, required: [true, 'Phone number is required'], unique: true, match: [/^\d{10,15}$/, 'Please enter a valid phone number']},
  email: { type: String, required:  [true, 'Email is required'], unique: true, lowercase: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] },
  birthDate: { type: Date, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  avatar: { type: String, default: ""},
  gender: { type: Boolean, default: false },
  address: { type: String, default: "" },
  status: { type: String, default: 'Inactive', enum: ['Active', 'Inactive'] }, 
  lastActive: { type: Date, default: null }, 
}, {collection: "users"});

const User = mongoose.model("User", userSchema);
export default User;