(() => {
    'use strict';

    const MENU_CATEGORIES_ENDPOINT = 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json';
    const MENU_ITEMS_FOR_CATEGORY_ENDPOINT = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json';

    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        this.getAllCategories = () => {
            return $http({ 
                method: "GET",
                url: MENU_CATEGORIES_ENDPOINT
            }).then((response) => response.data);
        }

        this.getItemsForCategory = (categoryShortName) => {
            return $http({ 
                method: "GET",
                url: MENU_ITEMS_FOR_CATEGORY_ENDPOINT.replace('{categoryShortName}', categoryShortName)
            }).then((response) => response.data);
        }
    }

})();