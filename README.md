# Auth + To-do list project

A basic crud app for a to-do app with an integrated session system. You can register, login to the app and reset your password. Once in the app you can create, view, edit and delete tasks. Each user has access to their tasks only.

## Frontend (In progress):

React multi-page app. I started working with ejs, then moved to React. I'm not sure if I am handling views adequately, I send the same html over and over and React renders the adequate view depending on the route using react router.

## Backend:

Express + MongoDB API that handles both auth and tasks.

I'm using express session + passport.js to handle session logic. I intend to get rid of passport at some point.
