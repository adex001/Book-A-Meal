/* eslint-disable class-methods-use-this */
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

    // Push the elements to the array
    userArray.push(userObject);
    res.send(userArray);
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
          message: 'cant find meal',
          user: userArray,
        });
      }
    });
  }
  // This method update a user
  // modifyUser(req, res) {

  // }
}

const userController = new UserController();
export default userController;
