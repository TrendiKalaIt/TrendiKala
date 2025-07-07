const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust path if needed

module.exports = async function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied: No token provided or malformed token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from DB using ID from token payload
    const user = await User.findById(verified.id || verified._id).select('_id name');

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user info to req.user
    req.user = {
      _id: user._id,
      name: user.name,
    };

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    res.status(401).json({ message: 'Invalid or expired token', error: error.message });
  }
};
