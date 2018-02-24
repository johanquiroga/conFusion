module.exports = {
  comments(Comment, User) {
    return Comment.author.equals(User._id);
  }
};
