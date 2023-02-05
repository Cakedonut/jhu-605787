(() => {
    "use strict";
    
    angular.module('common')
    .service('UserService', UserService);
    
    function UserService() {
        let userRegistered = false;

        const userInfo = {
            'firstName': '',
            'lastName': '',
            'email': '',
            'phone': '',
            'favoriteMenuItem': '',
        };

        /** Register the user */
        this.register = (firstName, lastName, email, phone, favoriteMenuItem) => {
            userInfo['firstName'] = firstName;
            userInfo['lastName'] = lastName;
            userInfo['email'] = email;
            userInfo['phone'] = phone;
            userInfo['favoriteMenuItem'] = favoriteMenuItem;

            userRegistered = true;
        };

        /** Get the user's info */
        this.getUserInfo = () => userInfo;

        /** Check if the user is registered */
        this.isUserRegistered = () => userRegistered;
    }
    
})();
    