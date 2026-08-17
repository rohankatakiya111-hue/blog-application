# 📝 BlogVerse - Full Stack Blog Application

BlogVerse is a full-stack blog application developed as part of an internship project.

The application allows users to register and securely login, create and manage their own blog posts, view blog details, and manage their profile through a protected dashboard.

---

## 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- Secure password hashing using bcryptjs
- JWT-based authentication
- Protected private routes
- JWT token management
- Logout functionality
- Invalid login validation
- Duplicate email validation

### 📝 Blog Management

- Create new blog posts
- View blog posts
- View individual blog details
- Edit blogs
- Delete blogs
- Blog author information
- Blog creation date and time
- User-specific blog management

### 📊 User Dashboard

- Protected dashboard
- Display logged-in user's blogs
- Create new blog
- Edit blog
- Delete blog
- Read full blog
- User authentication check

### 👤 User Profile

- Display logged-in user's name
- Display logged-in user's email
- Protected profile page
- Logout functionality

### 📱 Responsive UI

- Mobile-friendly interface
- Responsive dashboard
- Responsive blog cards
- Responsive forms
- Mobile navigation support

### 🗄️ Database

- MongoDB database
- MongoDB Atlas
- Mongoose ODM
- User data storage
- Blog data storage
- User-blog relationship

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Authentication & Security

- JWT (JSON Web Token)
- bcryptjs

### Development Tools

- Git
- GitHub
- Visual Studio Code / Sublime Text
- Postman

---

## 📁 Project Structure

```text
blog-application/
│
├── backend/
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── blogController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Blog.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── fontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-blog.html
│   ├── blog-details.html
│   ├── profile.html
│   ├── main.js
│   └── style.css
│
└── README.md
```

> Note: The frontend folder is currently named `fontend` in the project.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rohankatakiya111-hue/blog-application.git
```

### 2. Open the Project

```bash
cd blog-application
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not upload the `.env` file to GitHub.

### 5. Start the Backend Server

```bash
node server.js
```

The backend server will run on:

```text
http://localhost:5000
```

### 6. Run the Frontend

Open the `fontend` folder using a local development server such as Live Server.

---

## 🔑 Authentication Flow

BlogVerse uses JWT-based authentication.

1. User registers an account.
2. Password is securely hashed using bcryptjs.
3. User logs in with email and password.
4. Backend verifies the credentials.
5. Backend generates a JWT token.
6. Token is stored in browser Local Storage.
7. Protected requests send the token using the `Authorization` header.
8. Backend verifies the token using JWT middleware.
9. Only the authenticated user's blogs are displayed in the dashboard.

Example authorization header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Blogs

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/api/blogs`     | Create a blog              |
| GET    | `/api/blogs`     | Get logged-in user's blogs |
| GET    | `/api/blogs/:id` | Get a single blog          |
| PUT    | `/api/blogs/:id` | Update a blog              |
| DELETE | `/api/blogs/:id` | Delete a blog              |

Protected blog endpoints require a valid JWT token.

---

## 🗄️ MongoDB

The application uses MongoDB Atlas for database storage.

The application contains two main collections:

### Users

Stores:

- Name
- Email
- Hashed Password
- Created date
- Updated date

### Blogs

Stores:

- Title
- Content
- Author
- User ID
- Created date
- Updated date

Each blog is connected to the authenticated user through the user's MongoDB ObjectId.

---

## 🔐 Security

The application includes:

- Password hashing using bcryptjs
- JWT authentication
- Protected API routes
- Protected dashboard
- Protected profile page
- User-specific blog access
- Environment variables for sensitive configuration

---

## 📱 Responsive Design

The frontend has been tested for:

- Desktop screens
- Mobile screens
- Responsive blog cards
- Responsive forms
- Dashboard layout
- Create Blog page
- Profile page

---

## 🧪 Testing

The following features have been tested:

- User registration
- User login
- JWT token generation
- Protected dashboard
- Create blog
- View blog
- Edit blog
- Delete blog
- User profile
- Logout
- Mobile responsiveness
- MongoDB connection

---

## 🚀 Deployment

The application can be deployed using platforms such as:

- Render
- Vercel
- Netlify

The backend requires the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📸 Screenshots

Screenshots can be added here after deployment.

Suggested screenshots:

1. Home Page
2. Register Page
3. Login Page
4. Dashboard
5. Create Blog
6. Blog Details
7. Profile Page
8. Mobile Responsive View

---

## 🔗 Project Links

### GitHub Repository

https://github.com/rohankatakiya111-hue/blog-application

### Live Website

Coming soon.

---

## 👨‍💻 Author

**Rohan R. Katakiya**

Bachelor of Computer Applications (BCA)

Gujarat, India

---

## 🎯 Internship Project

This project was developed as part of a Full Stack Web Development Internship to gain practical experience with:

- Frontend Development
- Backend Development
- REST APIs
- MongoDB
- Authentication
- JWT
- Git & GitHub
- Deployment
- Responsive Web Design

---

## ⭐ Future Improvements

Possible future improvements include:

- Blog search
- Blog categories
- Comments
- Like system
- Image upload
- Rich text editor
- Forgot password functionality
- Admin dashboard
- Pagination
- Blog sharing

---

**Built with ❤️ using HTML, CSS, JavaScript, Node.js, Express.js and MongoDB.**
