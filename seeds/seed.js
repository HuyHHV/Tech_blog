const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('----------users seeded-----------')

  const posts = await Post.bulkCreate(postData);
  console.log('----------posts seeded-----------')

  const comments = await Comment.bulkCreate(commentData);
  console.log('----------comment seeded-----------')
 
  process.exit(0);
};

seedDatabase();
