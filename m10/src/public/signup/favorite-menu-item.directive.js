(() => {
    'use strict';
    
    angular.module('public')
    .directive('favoriteMenuItem', FavoriteMenuItemDirective);

    FavoriteMenuItemDirective.$inject = ['$q', 'MenuService'];
    function FavoriteMenuItemDirective($q, MenuService) {
        return {
            require: 'ngModel',
            link: (scope, elem, attr, ctrl) => {
                ctrl.$asyncValidators.favoriteMenuItem = (modelValue, viewValue) => {
                    const result = $q.defer();

                    if (ctrl.$isEmpty(modelValue)) {
                        return result.reject();
                    }

                    MenuService.getMenuItemByShortName(modelValue).then((data) => {
                        return data ? result.resolve() : result.reject();
                    });

                    return result.promise;
                }
            }
        }
    }
})();