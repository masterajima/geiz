Name:Ajima Master
Date:2023-05-25
Full stack Coding Test

***************************Node.js***************************************
1.*********Set up the project:*********************

Create a new directory for your project.
Initialize a new Node.js project using npm or yarn:
npm init -y
****************Install necessary dependencies:************************************************
npm install express bcrypt jsonwebtoken multer mongoose sequelize
Create the directory structure:
src/
  |- controllers/
  |- middleware/
  |- models/
  |- routes/
  |- utils/
*************Set up Database****************************************************************************

Set up the databases:

******************For SQL database:*************************************
Install the required packages (e.g., pg, sequelize) and set up the connection in src/utils/database.js.
Create a User model in src/models/User.js using Sequelize ORM.
For NoSQL database (MongoDB):
Install the required packages (e.g., mongoose) and set up the connection in src/utils/database.js.
Create a User model in src/models/User.js using Mongoose.
Implement User Registration:

****************Create a UserController in src/controllers/UserController.js with a method for user registration.****************
Implement the registration route in src/routes/auth.js, which uses the UserController to handle user registration requests.
Implement User Authentication:

Create a UserController in src/controllers/UserController.js with a method for user authentication.
Implement the authentication route in src/routes/auth.js, which uses the UserController to handle authentication requests.
Implement Image Uploading:

*************************Create an ImageController in src/controllers/ImageController.js with a ************************



