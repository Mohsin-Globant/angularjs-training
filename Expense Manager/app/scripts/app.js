'use strict';

/**
 * @ngdoc overview
 * @name expenseManagerApp
 * @description
 * # expenseManagerApp
 *
 * Main module of the application.
 */
angular
  .module('expenseManagerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/addExpense', {
        templateUrl: 'views/addExpense.html',
        controller: 'AddExpenseCtrl',
        controllerAs: 'addExpense'
      })
      .when('/showAll', {
        templateUrl: 'views/showAllExpenses.html',
        controller: 'ShowAllExpensesCtrl',
        controllerAs: 'showExpenses'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
