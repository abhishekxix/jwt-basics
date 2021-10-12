//check username, pwd in post(login) request
// if exists: create new JWT and send it back to the front-end

const CustomAPIError = require('../errors/custom-error');

// Set up authentication

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    return res.json({ msg: 'Login route' });
  }

  throw new CustomAPIError('Please enter email and password.', 400);
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: 'dashboard route',
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
