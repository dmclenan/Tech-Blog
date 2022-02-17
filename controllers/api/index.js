const router = require('express').Router();

//Require the correct files into the api folder
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
//Create the router.use functionality for each required file
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;