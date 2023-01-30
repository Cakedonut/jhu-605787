(() => {
    'use strict';

    const GOOD_AMOUNT_MESSAGE = "Enjoy!";
    const GOOD_AMOUNT_CLASS = "has-success";

    const TOO_MUCH_MESSAGE = "Too much!";
    const TOO_MUCH_CLASS = "has-success";

    const EMPTY_MESSAGE = "Please enter data first";
    const EMPTY_MESSAGE_CLASS = "has-error";


    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function ($scope) {
        $scope.lunchItems = "";
        $scope.lunchItemsClass = "";

        $scope.lunchMessage = "";
        $scope.lunchMessageClass = "";

        $scope.checkLunchItems = function () {
            if (!$scope.lunchItems.length) {
                $scope.lunchMessage = EMPTY_MESSAGE;

                $scope.lunchMessageClass = EMPTY_MESSAGE_CLASS;
                $scope.lunchItemsClass = EMPTY_MESSAGE_CLASS;
                return;
            }

            const lunchItems = $scope.lunchItems.split(',');
            let countLunchItems = 0;
            lunchItems.forEach(lunchItem => {
                if (lunchItem.trim()) {
                    countLunchItems++;
                }
            });

            if (countLunchItems === 0) {
                $scope.lunchMessage = EMPTY_MESSAGE;

                $scope.lunchMessageClass = EMPTY_MESSAGE_CLASS;
                $scope.lunchItemsClass = EMPTY_MESSAGE_CLASS;
            } else if (countLunchItems <= 3) {
                $scope.lunchMessage = GOOD_AMOUNT_MESSAGE;

                $scope.lunchMessageClass = GOOD_AMOUNT_CLASS;
                $scope.lunchItemsClass = GOOD_AMOUNT_CLASS;
            } else {
                $scope.lunchMessage = TOO_MUCH_MESSAGE;

                $scope.lunchMessageClass = TOO_MUCH_CLASS;
                $scope.lunchItemsClass = TOO_MUCH_CLASS;
            }
        }
    });
})();