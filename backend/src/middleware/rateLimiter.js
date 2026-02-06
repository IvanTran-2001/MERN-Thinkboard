import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  // per user
  const userId = req.user ? req.user._id.toString() : req.ip; // Use user ID if available, otherwise fallback to IP
  try {
    const { success } = await ratelimit.limit(userId);
    if (!success)
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    next();
  } catch (error) {
    console.log("Rate Limiter Error:", error);
    next(error);
  }
};

export default rateLimiter;
