const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
const body = req.body;
console.log(body);
try {
  const newPost = await Post.create({ ...body, userId: req.session.userId});
  console.log(" new post:", newPost);
  res.json(newPost);
} catch (err) {
  console.log('FAIL', err);
  res.status(400).json(err);
}
});

router.put('/:id', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
try {
  console.log('the req.body', req.body);
  const [affectedRows] = await Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (affectedRows > 0) {
    res.status(200).end();
  } else {
    res.status(404).end();
  } 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
