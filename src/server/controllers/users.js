const fromParams = require('../util/fromParams');

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
