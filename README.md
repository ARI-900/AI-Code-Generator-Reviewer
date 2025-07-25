# 🚀 AI Code Reviewer & Generator (MERN + Google Gemini AI)

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge&logo=react)]()
[![Google Gemini](https://img.shields.io/badge/AI-Gemini_Custom_Model-green?style=for-the-badge)]()
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)]()

> **An intelligent full-stack platform that reviews your code, suggests improvements, and generates optimized code snippets — powered by Google Gemini AI (custom-trained model).**

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [API Overview ](#api-overview-optional)
- [Screenshots & Demo](#screenshots--demo)
- [Contact](#contact)

---

## 🧠 Overview

This project is an **AI-powered code review and generation system** designed to enhance developer productivity. It analyzes your code, detects issues, suggests improvements, and can even generate clean, optimized snippets — all using the intelligence of **Google Gemini AI with a custom-trained model**.

Whether you're debugging, learning, or optimizing, this tool gives you real-time insights and actionable suggestions.

---

## ✨ Features

- 🔍 Real-time code review with AI insight
- 💡 AI-generated improvement suggestions
- ✨ AI-based code snippet generator
- 📜 Multi-language support (C++, JS, Python, Java, etc.)
- 🌐 Responsive, clean UI
- 🧠 Google Gemini custom model integration
- 🗃️ Session history and download options
- 🔐 Optional JWT Auth for secure usage
- ⚙️ Easy-to-extend modular structure

---

## ⚙️ Tech Stack

| Layer      | Technology                             |
|------------|-----------------------------------------|
| Frontend   | React.js, Tailwind CSS, Axios           |
| Backend    | Node.js, Express.js                     |
| Database   | MongoDB, Mongoose                       |
| AI Engine  | Google Gemini (custom-trained model)    |
| Auth       | JWT, bcrypt.js *(optional)*             |
| Dev Tools  | ESLint, Prettier                        |

---

## 📁 Folder Structure
```bash
AI-Code-Reviewer/
│
├── backend/                # Express backend
│   ├── controllers/        # Route handlers
│   ├── routes/             # API endpoints
│   ├── models/             # Mongoose models
│   ├── services/           # Gemini API integration logic
│   └── server.js           # Backend entry point
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main page components
│   │   ├── services/       # API communication
│   │   └── App.jsx         # Frontend root component
│
├── screenshots/            # Demo images for documentation
│   ├── home.png
│   ├── review.png
│   └── generate.png
│
├── .env.example            # Sample environment variables
├── README.md               # Project documentation
└── package.json            # Project dependencies
```
## ✨ Features
✅ Upload your code for AI-powered reviews and feedback.
✅ Get clean, intelligent suggestions using Google Gemini.
✅ Generate code snippets from natural language prompts.
✅ Intuitive and fast frontend built with React.
✅ Realtime communication with backend via Axios.
✅  Database integrasion with MongoDB

---

## 🛠️ Installation & Setup
```bash
🔗 Clone the Repository
git clone https://github.com/ARI-900/ai-code-reviewer.git
cd ai-code-reviewer
```

```bash
📦 Backend 
cd backend
npm install
```

```bash
🧪 Create a .env file inside the backend directory:
create .env then do following :
1: PORT=5000
2: MONGO_URI=your_mongodb_connection_uri
3: GEMINI_API_KEY=your_google_gemini_api_key
```

```bash
🚀 Start Backend Server
npm run dev
```

```bash
💻 Frontend 
cd ../frontend
npm install
npm run dev
```

```bash
🔐 Environment Variables
Here’s a sample .env.example:

# .env.example
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 📡 API Overview

| Method | Route           | Description                     |
|--------|------------------|---------------------------------|
| POST   | /api/review     | Send code for review by Gemini AI |
| POST   | /api/suggest    | Get AI-generated suggestions     |
| POST   | /api/generate   | Generate code from prompt/context |
 ---

## 🧠 Powered By Google Gemini AI

This project uses the **Gemini API** from **Google Cloud** to intelligently analyze, review, and generate code based on your input. With **custom fine-tuned prompts**, Gemini provides:

- 🔍 Context-aware code reviews
- 💡 Meaningful suggestions
- 🛠️ Smart bug detection and fixes
- 📦 Code generation across multiple languages

> Gemini helps give meaningful suggestions and contextual improvements tailored to your code.

### 🔒 Note

You’ll need a **valid Gemini API Key** to use the AI features.  
Create a `.env` file in the `backend/` directory and add the following:

```env
GEMINI_API_KEY=your_google_gemini_api_key
```

---

## 🖼️ Screenshots

| Home Page | Code Review | Code Generator |
|-----------|--------------|----------------|
| ![Home](./screenshots/home.png) | ![Review](./screenshots/review.png) | ![Generate](./screenshots/generate.png) |


---
## ⚙️ Tech Stack

- **Frontend:** React.js, Tailwind CSS (or plain CSS)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **AI Integration:** Google Gemini API  
- **HTTP Client:** Axios  
- **Version Control:** Git & GitHub  

---

## 💬 **Contact**
##### 🧑‍💻 Author: Arijit Chowdhury
##### 📧 Email: [arichowdhury900@gmail.com](mailto:arichowdhury900@gmail.com)
##### 🌐 GitHub: ARI-900

---
