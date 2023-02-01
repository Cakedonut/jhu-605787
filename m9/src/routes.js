(() => {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        // Categories page
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/categories-page.template.html',
            controller: 'CategoriesPageController as $ctrl',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Items page
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/templates/items-page.template.html',
            controller: 'ItemsPageController as $ctrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }
})();