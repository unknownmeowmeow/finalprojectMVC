const db = require('../config/db');

const create = ({ product_name, product_quantity, product, product_status,created_at }, callback) => {
  db.query(
    'INSERT INTO product (product_name, product_quantity, product price,product_status,created_at) VALUES (?, ?, ?, ?,NOW())',
    [product_name, product_quantity, product, product_status, created_at],
    callback
  );
};


module.exports = {
  create
};
