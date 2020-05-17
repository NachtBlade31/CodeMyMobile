const express = require('express');
const router = express.Router();

const { landing, addNewUser, list } = require('../controllers/user');

router.get('/user', landing)
router.post('/user/addNewUser', addNewUser)
router.post('/user/allUsers', list)
// router.get('/profile', requireLoggedin, authMiddleWare, read)


module.exports = router;