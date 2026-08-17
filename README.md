\# 📝 BlogVerse - Blog Application



BlogVerse is a full-stack blog application developed as part of an internship project.



The application allows users to register and login, create blog posts, view all blogs, read individual blog details, edit blogs and delete blogs.



\---



\## 🚀 Features



\### 👤 User Authentication



\- User Registration

\- User Login

\- Password hashing using bcrypt

\- Duplicate email validation

\- Invalid login validation



\### 📝 Blog Management



\- Create new blog

\- View all blogs

\- View individual blog details

\- Edit blog

\- Delete blog

\- Blog creation date and time

\- Blog author information



\### 📊 Dashboard



\- Display all published blogs

\- Read full blog

\- Edit blog

\- Delete blog

\- Create new blog



\### 🗄️ Database



\- MongoDB database

\- MongoDB Atlas

\- Mongoose ODM

\- User data storage

\- Blog data storage



\---



\## 🛠️ Technologies Used



\### Frontend



\- HTML5

\- CSS3

\- JavaScript



\### Backend



\- Node.js

\- Express.js



\### Database



\- MongoDB

\- MongoDB Atlas

\- Mongoose



\### Other Technologies



\- bcryptjs

\- REST API

\- Git

\- GitHub



\---



\## 📁 Project Structure



```text

blog-application/

│

├── backend/

│   ├── controllers/

│   │   ├── authController.js

│   │   └── blogController.js

│   │

│   ├── models/

│   │   ├── User.js

│   │   └── Blog.js

│   │

│   ├── routes/

│   │   ├── authRoutes.js

│   │   └── blogRoutes.js

│   │

│   ├── middleware/

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

│   ├── main.js

│   └── style.css

│

└── README.md

