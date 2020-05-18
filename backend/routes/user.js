const express = require('express');
const router = express.Router();

const { landing, addNewUser, list, listFriends, listFriendsofFriend, singleUser, photo } = require('../controllers/user');

//default Page
router.get('/user', landing)

//Route for adding new users
router.post('/user/addNewUser', addNewUser)

//Route to get single user Data
router.get('/user/:firstName', singleUser)

//Route to get User as per Pagination limit
router.post('/user/allUsers', list)

//Route to get list of friends
router.get('/user/friends/:firstName', listFriends)

//Route to get list of friends of the friends
router.post('/user/fof/:firstName', listFriendsofFriend)

//Route to get photo of user
router.get('/user/photo/:firstName', photo)


module.exports = router;