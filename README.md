Blank MEAN Stack Project

ng serve is on port 4200
node/express server is on port 3000

To serve on a web hosting site, build your app with ng build first. The output folder is already set to the public folder in the backend folder.

The second .gitignore within the backend folder is necessary for example for Heroku, because you have to initialize its git within this folder, ergo
Heroku won't use the root folder's .gitignore

Instructions:

1. Run npm install in the backend folder and frontend folder, respectively.

2. create a .env file in the backend folder and include your Mongo Database URI/URL

3. Hook it up to the DB_URL variable in the app.js in the backend folder

Any questions, let me know.
