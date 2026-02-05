import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  // per user
  try {
    const { success } = await ratelimit.limit("my-limiter-key");
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
