// Menu Schema definition
import menuArray from '../model/MenuModel';

const MenuController = {
  createMenu: (req, res) => {
    const menuId = menuArray.length + 1;
    const menuDay = '3/5/2018';
    const meals = [1, 3];
    const menuObject = {};
    menuObject.menuId = menuId;
    menuObject.menuDay = menuDay;
    menuObject.meals = meals;
    // Sends the menu Object to the array
    menuArray.push(menuObject);

    // Sends the response
    res.send({
      success: 'true',
      message: `Successfully created menu for menuDay for ${menuDay}`,
      menu: menuArray // Newly created menu
    });
  }
};

export default MenuController;
