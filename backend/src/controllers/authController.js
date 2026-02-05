import User from "../models/Users.js";

export async function registerUser(req, res) {
  try {
    const { userName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ userName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export async function logoutUser(req, res) {
  try {
    // For stateless JWT, logout is handled on the client side by deleting the token.
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}
