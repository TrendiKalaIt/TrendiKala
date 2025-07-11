
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // No token: treat as guest, allow request to continue
    req.user = null;
    return next();
  }

  const token = authHeader.split(' ')[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(verified.id || verified._id);
    if (!user) {
      // User not found, treat as guest or reject
      req.user = null;  // or: return res.status(401).json({ message: 'User not found' });
      return next();
    }

    req.user = user;
    next();
  } catch (error) {
    // Token invalid or expired: treat as guest (or optionally reject)
    console.error('Auth Middleware Warning:', error.message);
    req.user = null;
    next();
  }
};
