const db = require('../config/db');

const getAll = (callback) => {
  db.query('SELECT * FROM product', callback);
};

module.exports = {
  getAll
};
