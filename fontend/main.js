async function registerUser(name, email, password) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
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

async function loginUser(email, password) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
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

    if (response.ok) {
      alert("Login successful!");

      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Invalid email or password!");
    }
  } catch (error) {
    console.error("Login Error:", error);

    alert("Server sathe connect thai shakyu nahi!");
  }
}

async function createBlog(title, content, author) {
  try {
    const response = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
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
    console.error("Blog Error:", error);

    alert("Server sathe connect thai shakyu nahi!");
  }
}
