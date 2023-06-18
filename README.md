# Auth + To-do list project

A basic crud app for a to-do app with an integrated session system. You can register, login to the app and reset your password. Once in the app you can create, view, edit and delete tasks. Each user has access to their tasks only.

https://task-manager-mx3w.onrender.com/

PLEASE, be patient, I'm using render's free tier for deployment, so the first API calls tend to go slow (reeeeeally slow). The first web load and some UI refreshes will take a bit. Sorry for the inconvenience 🙏

## Frontend:

React multi-page app. I started working with ejs, then moved to React. The different views are displayed using React-router. There are 2 additional views for account recovery that I plan to work on (I'll do it in the backend first).

## Backend:

Express + MongoDB API that handles both auth and tasks.

I'm using express session + passport.js to handle session logic. The database is live at Atlas (MongoDB cloud) and the service layer interacts with it using Mongoose.
