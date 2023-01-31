(() => {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('angularDollars', angularDollarsFilter);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getToBuyItems();

        this.buyItem = ShoppingListCheckOffService.buyItem;
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        const toBuy = [{
            'name': 'cookies',
            'quantity': 10,
            'pricePerItem': 2
        },{
            'name': 'carrots',
            'quantity': 25,
            'pricePerItem': 1
        },{
            'name': 'cans of soup',
            'quantity': 4,
            'pricePerItem': 3
        },{
            'name': 'bread loaves',
            'quantity': 2,
            'pricePerItem': 3
        },{
            'name': 'oranges',
            'quantity': 6,
            'pricePerItem': 2
        },{
            'name': 'bananas',
            'quantity': 8,
            'pricePerItem': 1
        },{
            'name': 'apples',
            'quantity': 4,
            'pricePerItem': 2
        },{
            'name': 'boxes of pasta',
            'quantity': 1,
            'pricePerItem': 4
        },{
            'name': 'pounds of beef',
            'quantity': 3,
            'pricePerItem': 8
        }];
        const bought = [];

        this.getToBuyItems = () => {
            return toBuy;
        }

        this.getBoughtItems = () => {
            return bought;
        }

        this.buyItem = (itemIndex) => {
            const boughtItem = toBuy[itemIndex];
            
            toBuy.splice(itemIndex, 1);
            bought.push(boughtItem);
        }
    }

    function angularDollarsFilter() {
        return (currency) => {
            return `$$$${currency}.00`;
        }
    }
})();