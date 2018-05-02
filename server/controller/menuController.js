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
  },
  getMenu: (req, res) => {
    // To return the menu for a specific day
    const menuDay = '2/5/2018';
    // Loop through the menu array
    menuArray.forEach((menu) => {
      // checks for the day
      if (menuDay !== menu.menuDay) {
        // Array for search results.
        const todaysMenu = [];
        // Inserts the object to todaysMenu array
        todaysMenu.push(menu);
        res.send({
          success: 'true',
          message: 'Successful',
          todaysMenu

        });
      } else {
        res.send({
          success: 'false',
          message: `No menu for ${menuDay}`
        });
      }
    });
  }
};

export default MenuController;
