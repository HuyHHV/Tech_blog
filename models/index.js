const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'OP_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'OP_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User,{
  foreignKey:"commenter_id"
})

module.exports = { User, Post, Comment };
