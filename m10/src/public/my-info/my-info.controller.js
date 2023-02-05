(() => {
    'use strict';

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService', 'MenuService'];
    function MyInfoController(UserService, MenuService) {
        this.$onInit = () => {
            this.userInfo = UserService.getUserInfo();
            this.userRegistered = UserService.isUserRegistered();

            if (this.userRegistered && this.userInfo['favoriteMenuItem']) {
                MenuService.getMenuItemByShortName(this.userInfo['favoriteMenuItem']).then((data) => {
                    this.favoriteMenuItemData = data ? data : null;
                });
            } else {
                this.favoriteMenuItemData = null;
            }
        }
    }
})();