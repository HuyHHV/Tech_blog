const router = require('express').Router();
const { Comment,User } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll(
      {
      where: {post_id: req.body.post_id},
      include: {model:User, require:true }
      }
    );
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      contents: req.body,
      commenter_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Post.destroy({
      where: {
        id: req.params.id,
        OP_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Put method comming soon 

module.exports = router;
