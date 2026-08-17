const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      author: author || req.user.name || req.user.email,

      // Logged-in user's ID
      user: req.user.id,
    });

    res.status(201).json({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "User blogs fetched successfully",
      blogs,
    });
  } catch (error) {
    console.error("Get Blogs Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog fetched successfully",
      blog,
    });
  } catch (error) {
    console.error("Get Blog Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found or you are not authorized",
      });
    }

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Delete Blog Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const blog = await Blog.findOneAndUpdate(
      {
        _id: id,
        user: req.user.id,
      },
      {
        title,
        content,
      },
      {
        new: true,
      },
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found or you are not authorized",
      });
    }

    res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Update Blog Error:", error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
};
