import userArray from '../model/usersModel';

const userController = {
  createUser: (req, res) => {
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
};

export default userController;
