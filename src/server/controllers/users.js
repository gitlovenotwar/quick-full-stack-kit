const fromParams = require('../util/fromParams');

module.exports.getAllUsers = async (req, res) => {
  res.json({
    success: true,
    data: {
      total: 0,
      entries: [],
    },
  });
};

module.exports.getUserById = async (req, res) => {
  const { id } = fromParams.getUserByIdParams(req);

  if(!id) {
    return res.status(500).send('Invalid id');
  }

  res.json({
    data: {
      id,
    },
    success: true,
  });
};
