'use strict';

/**
 * @ngdoc function
 * @name expenseManagerApp.controller:ShowAllExpensesCtrl
 * @description
 * # ShowAllExpensesCtrl
 * Controller of the expenseManagerApp
 */
angular.module('expenseManagerApp')
  .controller('ShowAllExpensesCtrl', function () {
    this.sortType = 'category';
    this.sortReverse = false;
    this.allExpenses = [
    {
        "date": "Fri Jan 01 2016",
        "amount": 500,
        "category": "Automobile",
        "paymentMode": "cash",
        "description": "Fuel",
        "$$hashKey": "object:9"
    },
    {
        "date": "Fri Jan 01 2016",
        "amount": 400,
        "category": "Entertainment",
        "paymentMode": "cash",
        "description": "Movie",
        "$$hashKey": "object:11"
    },
    {
        "date": "Sat Jan 02 2016",
        "amount": 1500,
        "category": "Family",
        "paymentMode": "credit",
        "description": "Dinner",
        "$$hashKey": "object:14"
    },
    {
        "date": "Sat Jan 02 2016",
        "amount": 2500,
        "category": "Food",
        "paymentMode": "cash",
        "description": "Grocery",
        "$$hashKey": "object:16"
    },
    {
        "date": "Sat Jan 02 2016",
        "amount": 300,
        "category": "Health Care",
        "paymentMode": "cash",
        "description": "Medicines",
        "$$hashKey": "object:18"
    },
    {
        "date": "Sun Jan 03 2016",
        "amount": 10000,
        "category": "Family",
        "paymentMode": "electronic-transfer",
        "description": "Rent",
        "$$hashKey": "object:21"
    },
    {
        "date": "Sun Jan 03 2016",
        "amount": 500,
        "category": "Entertainment",
        "paymentMode": "credit",
        "description": "Games",
        "$$hashKey": "object:23"
    }
];

  });
