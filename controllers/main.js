//check username, pwd in post(login) request
// if exists: create new JWT and send it back to the front-end
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

// Set up authentication

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    throw new CustomAPIError('Please enter email and password.', 400);
  }
  // only for demo
  const id = new Date().getDate();
  // demo end

  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).json({ msg: 'logged in', token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    throw new CustomAPIError('Unauthorized to access the route', 401);
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (err) {
    throw new CustomAPIError('Not authorized to access this route', 401);
  }
};

module.exports = {
  login,
  dashboard,
};
