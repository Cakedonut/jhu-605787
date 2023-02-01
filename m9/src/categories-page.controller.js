(() => {
    'use strict';

    angular.module('MenuApp')
    .controller('CategoriesPageController', CategoriesPageController);

    CategoriesPageController.$inject = ['categories'];
    function CategoriesPageController(categories) {
        this.categories = categories;
    }
})();