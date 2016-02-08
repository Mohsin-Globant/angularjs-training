'use strict';

/**
 * @ngdoc function
 * @name expenseManagerApp.controller:AddExpenseCtrl
 * @description
 * # AddExpenseCtrl
 * Controller of the expenseManagerApp
 */
angular.module('expenseManagerApp')
  .controller('AddExpenseCtrl', function () {
    this.allExpenses = [];

    this.add = function () {
      var newExpense = {};
      newExpense.date = this.date && this.date.toDateString();
      newExpense.amount = this.amount;
      newExpense.category = this.category;
      newExpense.paymentMode = this.paymentMode;
      newExpense.description = this.description;
      this.allExpenses.push(newExpense);
    };

  });
