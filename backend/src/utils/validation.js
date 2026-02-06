/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {object} - { isValid: boolean, message: string }
 */
export const isValidPassword = (password) => {
  if (!password) {
    return { isValid: false, message: "Password is required" };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      message: "Password must be at least 6 characters long",
    };
  }

  if (password.length > 128) {
    return { isValid: false, message: "Password is too long" };
  }

  return { isValid: true, message: "Password is valid" };
};

/**
 * Validates username format
 * @param {string} userName - Username to validate
 * @returns {object} - { isValid: boolean, message: string }
 */
export const isValidUserName = (userName) => {
  if (!userName || userName.trim().length === 0) {
    return { isValid: false, message: "Username is required" };
  }

  if (userName.length < 3) {
    return {
      isValid: false,
      message: "Username must be at least 3 characters long",
    };
  }

  if (userName.length > 30) {
    return { isValid: false, message: "Username is too long" };
  }

  // Username can only contain letters, numbers, underscores, and hyphens
  const userNameRegex = /^[a-zA-Z0-9_-]+$/;
  if (!userNameRegex.test(userName)) {
    return {
      isValid: false,
      message:
        "Username can only contain letters, numbers, underscores, and hyphens",
    };
  }

  return { isValid: true, message: "Username is valid" };
};

/**
 * Validates login credentials
 * @param {string} email - Email to validate
 * @param {string} password - Password to validate
 * @returns {object} - { isValid: boolean, errors: array }
 */
export const validateLoginCredentials = (email, password) => {
  const errors = [];

  if (!email) {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Invalid email format");
  }

  if (!password) {
    errors.push("Password is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validates registration credentials
 * @param {string} userName - Username to validate
 * @param {string} email - Email to validate
 * @param {string} password - Password to validate
 * @returns {object} - { isValid: boolean, errors: array }
 */
export const validateRegisterCredentials = (userName, email, password) => {
  const errors = [];

  // Validate username
  const userNameValidation = isValidUserName(userName);
  if (!userNameValidation.isValid) {
    errors.push(userNameValidation.message);
  }

  // Validate email
  if (!email) {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Invalid email format");
  }

  // Validate password
  const passwordValidation = isValidPassword(password);
  if (!passwordValidation.isValid) {
    errors.push(passwordValidation.message);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
