const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure path is correct

module.exports = async function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied: No token provided or malformed token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Fetch full user document
    const user = await User.findById(verified.id || verified._id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // ✅ Attach full user object to req.user
    req.user = user;

    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error.message);
    res.status(401).json({ message: 'Invalid or expired token', error: error.message });
  }
};
