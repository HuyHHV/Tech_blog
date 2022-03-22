const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model:User,
          attributes:['username'],
          require:true
        },
        {
          model:Comment,
          include: {model: User, attributes:['username']},
          require:true
        },
      ]
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      OP_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Put method comming soon 
router.put('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const postData = await  Post.update({
      ...req.body
    },
    {
      where: {
        id: req.params.id
      }
    })

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
