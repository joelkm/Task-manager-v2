# Task Manager V2

THis is the secon version of this other project: https://github.com/joelkm/Task-manager-v1
Here are some thing that I'm implementing:
- New UI
- Collaborative spaces
- E-mail notifications
- Desktop app version

## Frontend:

React multi-page app. I started working with ejs, then moved to React. The different views are displayed using React-router. There are 2 additional views for account recovery that I plan to work on (I'll do it in the backend first).

## Backend:

Express + MongoDB API that handles both auth and tasks.

I'm using express session + passport.js to handle session logic. The database is live at Atlas (MongoDB cloud) and the service layer interacts with it using Mongoose.
