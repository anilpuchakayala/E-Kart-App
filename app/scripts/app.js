'use strict';
/**
 * Main module of the application.
 */
angular
  .module('coolstuffApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {  
    $urlRouterProvider.otherwise('/produtslist');
    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
        })
        .state('produtslist', {
          url: '/produtslist',
          parent: 'base',
          templateUrl: 'views/main.html',
          controller: 'productsCtrl'
        });
  });
