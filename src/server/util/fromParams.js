/**
 * Parses the params to get passed values
 */

module.exports.getUserByIdParams = function(req) {
  let { id } = req.params || {};
  id = parseInt(id);
  return {
    id,
  };
};
