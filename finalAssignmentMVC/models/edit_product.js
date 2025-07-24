const db = require('../config/db');

const findidproduct = (id, callback) => {
  db.query('SELECT * FROM students WHERE id = ?', [id], callback);
};

module.exports = {
  findidproduct
};