# To-do list

A basic crud app for a to-do app with an integrated session system.

## Frontend:

React multi-page app. I started working with ejs, then moved to React. I'm not sure if I am handling views adequately, I send the same html over and over with the views requests and React renders the adequate view depending on the window.location property.

## Backend:

Express + MongoDB API that handles both auth and tasks.

I'm using express session + passport.js to handle session logic. I intend to get rid of passport at some point.
