const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

// Create Blog
router.post("/", createBlog);

// Get All Blogs
router.get("/", getBlogs);

// Get Single Blog
router.get("/:id", getBlogById);

// Delete Blog
router.delete("/:id", deleteBlog);

// Update Blog
router.put("/:id", updateBlog);

module.exports = router;
