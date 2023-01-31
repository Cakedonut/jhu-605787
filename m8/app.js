(() => {
    'use strict';

    const MENU_ITEMS_ENDPOINT = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        this.found = [];
        this.searchTerm = '';
        this.searchEmpty = false;

        this.search = () => {
            if (!this.searchTerm) {
                this.searchEmpty = true;
                return;
            }

            this.searchEmpty = false;
            MenuSearchService.getMatchedMenuItems(this.searchTerm)
                .then(found => {
                    this.found = found;
                    if (!this.found.length) {
                        this.searchEmpty = true;
                    }
                });
        };

        this.removeFoundItemByIndex = (itemIndex) => {
            this.found.splice(itemIndex, 1);
            if (!this.found.length) {
                this.searchEmpty = true;
            }
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        this.getMatchedMenuItems = (searchTerm) => {
            return $http({ 
                method: "GET",
                url: MENU_ITEMS_ENDPOINT
            }).then((response) => {
                const found = [];
                const searchTermToLower = searchTerm.toLowerCase();

                for (const data of Object.values(response.data)) {
                    data.menu_items.forEach(menuItem => {
                        if (menuItem.description.toLowerCase().includes(searchTermToLower)) {
                            found.push(menuItem);
                        }
                    });
                }

                return found;
            });
        }
    }

    function FoundItemsDirective() {
        const ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'found',
            bindToController: true,
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {

    }
})();