//check username, pwd in post(login) request
// if exists: create new JWT and send it back to the front-end
const jwt = require('jsonwebtoken');
const BadRequest = require('../errors');

// Set up authentication

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    throw new BadRequest('Please enter email and password.');
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
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
