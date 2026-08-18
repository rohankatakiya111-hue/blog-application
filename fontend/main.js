const API_URL = "https://blogverse-backend-zr0p.onrender.com";

// ==========================================
// REGISTER USER
// ==========================================

async function registerUser(name, email, password) {
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful!");

      window.location.href = "login.html";
    } else {
      alert(data.message || "Registration failed!");
    }
  } catch (error) {
    console.error("Register Error:", error);

    alert("Server sathe connect thai shakyu nahi!");
  }
}

// ==========================================
// LOGIN USER
// ==========================================

async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    console.log("Login Response:", data);

    if (response.ok) {
      alert("Login successful!");

      // Save user information
      localStorage.setItem("user", JSON.stringify(data.user));

      // Save JWT token
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Invalid email or password!");
    }
  } catch (error) {
    console.error("Login Error:", error);

    alert("Server sathe connect thai shakyu nahi!");
  }
}

// ==========================================
// CREATE BLOG
// ==========================================

async function createBlog(title, content, author) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        title: title,
        content: content,
        author: author,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Blog created successfully!");

      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Blog create failed!");
    }
  } catch (error) {
    console.error("Create Blog Error:", error);

    alert("Server sathe connect thai shakyu nahi!");
  }
}
