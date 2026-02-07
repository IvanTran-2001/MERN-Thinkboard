/**
 * Rate Limiting Middleware using Upstash Redis
 * Prevents API abuse with user-based or IP-based limiting
 */

import ratelimit from "../config/upstash.js";

/**
 * Rate limiter - Uses user ID if authenticated, otherwise IP address
 */
const rateLimiter = async (req, res, next) => {
  // Determine identifier: user ID (if authenticated) or IP address (for guests)
  const userId = req.user ? req.user._id.toString() : req.ip;

  try {
    // Check rate limit with Upstash Redis
    const { success } = await ratelimit.limit(userId);

    if (!success) {
      // Rate limit exceeded - send 429 response
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    }

    // Within rate limit - continue to next middleware
    next();
  } catch (error) {
    // Log rate limiter error (usually Redis connection issues)
    console.log("Rate Limiter Error:", error);

    // Pass error to error handling middleware
    // In production, you might want to allow the request through on rate limiter failure
    next(error);
  }
};

export default rateLimiter;
