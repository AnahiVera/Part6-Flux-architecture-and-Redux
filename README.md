# Full Stack Open – Part 6 Projects

This repository contains my solutions and exercises for **Part 6** of the Full Stack Open course, focusing on Flux Architecture and Redux. Each folder is a separate project:

## 📦 Projects

### 1. Part6-Anecdotes

A React + Redux app for displaying, voting, filtering, and creating anecdotes.  
Features:
- List anecdotes from a backend
- Vote for your favorite anecdote
- Add new anecdotes
- Filter anecdotes by keyword
- Notifications for actions

**Run locally:**
```bash
cd Part6-Anecdotes
npm install
npm run dev  
# In a separate terminal, run the mock server:
npm run server 
```


### 2. Part6-Unicafe-redux

A Redux-powered version of the Unicafe feedback app.  
Features:
- Collect feedback (good, neutral, bad)
- Show statistics
- State managed with Redux

**Run locally:**
```bash
cd Part6-Unicafe-redux
npm install
npm start
```

### 3. query-anecdotes

A React app using React Query for fetching and mutating anecdotes.  
Features:
- Fetch anecdotes from backend
- Vote and create anecdotes with React Query
- Optimistic updates and notifications

**Run locally:**
```bash
cd query-anecdotes
npm install
npm run dev  
npm run dev  
# In a separate terminal, run the mock server:
npm run server 
```

run server for the mock db.js in a different terminal

---

## 🛠️ Technologies

- React
- Redux & Redux Toolkit
- React-Redux
- Redux Thunk
- React Query (for query-anecdotes)
- Vite or Create React App

## 📚 Course Content

- Flux Architecture: Unidirectional data flow
- Redux: Predictable state container
- React-Redux: Official React bindings
- Redux Toolkit: Modern Redux development
- Redux Thunk: Middleware for async actions
- React Query: Data fetching and caching

---

## 💡 How to Use

1. Clone the repository.
2. Enter the folder of the project you want to run.
3. Install dependencies and start the development server.

---

## 📖 License

This repository is for educational purposes as part of the Full Stack Open course.

---

Feel free to explore each project folder for more details and source code!