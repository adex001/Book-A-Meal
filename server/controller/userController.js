/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import userArray from '../model/usersModel';

class UserController {
  createUser(req, res) {
    const userObject = {};
    const userName = 'Fayoke';
    const email = 'fayoke@gmail.com';
    const password = '1233333';

    userObject.userId = userArray.length + 1;
    userObject.userName = userName;
    userObject.email = email;
    userObject.password = password;

    // Conditions to push the elements into persistence

    // Push the elements to the array
    userArray.push(userObject);
    // Creates a token object
    jwt.sign({ userObject }, 'secretkey', (err, token) => {
      res.json({
        token,
      });
    });
    // jwt.verify(req.token, 'secretkey', (err, myData) => {
    //   if (err) {
    //     res.sendStatus(403);
    //   } else {
    //     res.json({
    //       message: 'New user Created!',
    //       myData,
    //     });
    //   }
    // });
  }
  deleteUser(req, res) {
    const userId = 1;
    // Iterates through the user array to find the particular user id
    userArray.forEach((user) => {
      // Checks for the Id
      if (userId === user.userId) {
        // Gets the index of the user object
        const index = userArray.indexOf(userId);
        // Delete the user
        userArray.splice(index, 1);
        res.send({
          success: 'true',
          message: 'successfully deleted the user',
          user: userArray,
        });
      } else {
        res.send({
          success: 'false',
          message: 'cant find user',
          user: userArray,
        });
      }
    });
  }
  // This method update a user
  // modifyUser(req, res) {

  // }
  loginUser(req, res) {
    const { username, password } = req.body;
    // Gets the information from the user
    if (!username || !password) {
      res.json({
        message: 'Username or password cannot be blank',
      });
    } else {
    // Goes to the database and return a user
    // Dummy user
      const user = {
        username: 'adeoye',
        password: 'password',
      };

      jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({
          token,
        });
      });
    }
  }
}

const userController = new UserController();
export default userController;
