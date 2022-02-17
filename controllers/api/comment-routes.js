const router = require('express').Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
  // Complete the asynchronous function for router.post
  const body = req.body;
  try {
    const newComment = await Comment.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try{
    const commentData = await Comment.findAll({
      include: [User],
    });
    const comments = commentData.map((comment) => comment.get({ plain: true}));
    console.log(comments);

    res.render('single-post', {comments, loggedIn: req.session.loggedIn});
  } catch(err) {
    res.status(400).json(err);
  }
});
module.exports = router;
