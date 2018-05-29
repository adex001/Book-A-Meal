# Book-A-Meal
Book-A-Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

[![Build Status](https://travis-ci.org/adex001/Book-A-Meal.svg?branch=develop)](https://travis-ci.org/adex001/Book-A-Meal)
[![Maintainability](https://api.codeclimate.com/v1/badges/febc42294b0cc9e79790/maintainability)](https://codeclimate.com/github/adex001/Book-A-Meal/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/febc42294b0cc9e79790/test_coverage)](https://codeclimate.com/github/adex001/Book-A-Meal/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/adex001/Book-A-Meal/badge.svg?branch=master)](https://coveralls.io/github/adex001/Book-A-Meal?branch=master)

### Key Application Features
A user can perform the following:

- Create an account
- Login to account
- Users(customers) can see the menu for a specific day and select an option from the menu.
- Users can view their order history 
- Users can cancel an unwanted order.
- Logout.

### Development

This application was developed using NodeJs with express for routing. Postgres was used for persisting data.

### Authentication: 
Users would be authenticated and validated using JsonWebToken.

### Installation

- Clone the project repository.
- Run git clone (https://github.com/adex001/Book-A-Meal.git)
``` git clone https://github.com/adex001/Book-A-Meal.git ```

more info: (https://help.github.com/articles/cloning-a-repository/)
- Run ``` npm install ``` to install the dependencies in the package.json file.
- Create Postgresql database and run ```sequelize dbmigrate npm undo and npm redo ```(https://www.postgresql.org/)

### Technologies Used

- JavaScript (ES6) (http://es6-features.org/)
- Node.js (https://nodejs.org/en/)
- Express (https://www.npmjs.com/package/express-api)
- Sequelize ORM (http://docs.sequelizejs.com/)
- Postgres (https://www.postgresql.org/)

### Author
Olatunbosun Adeoye