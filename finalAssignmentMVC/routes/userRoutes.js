const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const controller = require('../controllers/studentController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

router.get('/', controller.showForm);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/students/profile', controller.profile);
router.get('/logout', controller.logout);

module.exports = router;
