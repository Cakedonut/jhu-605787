(() => {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemsPageController', ItemsPageController);

    ItemsPageController.$inject = ['items'];
    function ItemsPageController(items) {
        this.categoryData = items.category;
        this.items = items.menu_items;
    }
})();