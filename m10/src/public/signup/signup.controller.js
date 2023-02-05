(() => {
    'use strict';

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['UserService'];
    function SignupController(UserService) {
        this.signedUp = false;

        this.signup = (user) => {
            UserService.register(user.firstName, user.lastName, user.email, user.phone, user.favoriteMenuItem);
            this.signedUp = true;
        }

        this.reset = (form) => {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            this.user = angular.copy({});
        }

        this.$onInit = () => {
            this.reset();
        }
    }
})();