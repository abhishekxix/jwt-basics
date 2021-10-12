const login = async (req, res) => {
  res.json({ msg: 'Login route' });
};

const dashboard = async (req, res) => {
  res.json({ msg: 'dashboard route' });
};

module.exports = {
  login,
  dashboard,
};
