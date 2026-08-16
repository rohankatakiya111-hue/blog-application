const express = require("express");

const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

// Create Blog
router.post("/", createBlog);

// Get All Blogs
router.get("/", getBlogs);

// Delete Blog
router.delete("/:id", deleteBlog);

// Update Blog
router.put("/:id", updateBlog);

module.exports = router;
