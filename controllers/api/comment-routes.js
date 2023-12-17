const express = require('express');
const router = express.Router();
const Comment = require('../models/commentModel'); // Assuming the Comment model is defined in commentModel.js

// Route to handle adding a new comment to a blog post
router.post('/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { content, userId } = req.body; // Assuming userId is stored in the session

  try {
    const newComment = await Comment.create({
      content,
      post: postId,
      creator: userId // Assuming you have a logged-in user's ID in the session
    });

    // Add the comment to the related blog post (Update the blog post model accordingly)
    // For example: blogPost.comments.push(newComment);
    // Save the updated blog post

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add the comment.' });
  }
});

// Route to get comments for a specific blog post
router.get('/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId }).populate('creator', 'username'); // Assuming 'creator' is a reference to the User model

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments.' });
  }
});

// Other comment-related routes (update, delete, etc.) can be added similarly

module.exports = router;
