import User from "../models/Users.js";
import { generateToken } from "../utils/generateToken.js";

export async function registerUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Create new user
    const newUser = new User({ userName, email, password });
    await newUser.save();

    const token = generateToken(newUser._id);

    // Send response with token
    res
      .status(201)
      .json({
        message: "User registered successfully",
        token,
        user: {
          id: newUser._id,
          userName: newUser.userName,
          email: newUser.email,
        },
      });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = generateToken(user._id);

    // Send response with token
    res
      .status(200)
      .json({
        message: "Login successful",
        token,
        user: { id: user._id, userName: user.userName, email: user.email },
      });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function logoutUser(req, res) {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}
