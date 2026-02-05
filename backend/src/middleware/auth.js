import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import { AUTH_ERRORS } from "../constants/authMessages.js";

export const protect = async (req, res, next) => {
  try {
    // Get token from Authorization header
    // Format: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: AUTH_ERRORS.NO_TOKEN });
    }

    // Extract token (remove "Bearer " prefix)
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token (exclude password)
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: AUTH_ERRORS.USER_NOT_FOUND });
    }

    next(); // Continue to the next middleware/controller
  } catch (error) {
    console.error("Auth middleware error:", error.message);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: AUTH_ERRORS.INVALID_TOKEN });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: AUTH_ERRORS.TOKEN_EXPIRED });
    }

    res.status(401).json({ message: AUTH_ERRORS.NOT_AUTHORIZED });
  }
};
