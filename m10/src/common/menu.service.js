(() => {
    'use strict';

    angular.module('common')
    .service('MenuService', MenuService);

    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
        const service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
            return response.data;
            });
        };

        /**
         * Get menu data for an item by short name
         * 
         * @param {string} shortName 
         * @returns {Promise} resolves to menu data or null if item does not exist
         */
        service.getMenuItemByShortName = function (shortName) {
            if (!shortName) {
                return Promise.resolve(null);
            }

            const shortNameRegex = new RegExp('^([A-Za-z]+)([0-9]+)$');
            const shortNameTokens = shortNameRegex.exec(shortName.toUpperCase());

            if (!shortNameTokens || shortNameTokens.length !== 3) {
                return Promise.resolve(null);
            }

            const categoryShortName = shortNameTokens[1];
            const menuNumber = Number(shortNameTokens[2]) - 1;

            return $http.get(ApiPath + '/menu_items/' + categoryShortName + '/menu_items/' + menuNumber + '.json')
            .then(response => {
                if (response && response.data) {
                    return {
                        ...response.data,
                        categoryShortName,
                        image: `images/menu/${categoryShortName}/${response.data['short_name']}.jpg`,
                    };
                }
                return null;
            });
        }
    }
})();
