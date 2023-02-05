describe('menuservice', () => {
    let menuService;
    let $httpBackend;
    let ApiPath;

    beforeEach(() => {
        module('restaurant');

        inject(($injector) => {
            menuService = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    describe('getMenuItemByShortName', () => {
        it('should return null if no menu item is provided', (done) => {
            menuService.getMenuItemByShortName().then(r => {
                expect(r).toBeNull();
                done();
            });
        });

        it('should return null if the menu item is in an invalid format', (done) => {
            menuService.getMenuItemByShortName('test').then(r => {
                expect(r).toBeNull();
                done();
            });
        });

        it('should return null if the menu item does not exist', (done) => {
            $httpBackend.expectGET(ApiPath + '/menu_items/L/menu_items/0.json').respond(null);
            menuService.getMenuItemByShortName('L1').then(r => {
                expect(r).toBeNull();
                done();
            });
            $httpBackend.flush();
        });

        it('should return menu data if the menu item exists', (done) => {
            $httpBackend.expectGET(ApiPath + '/menu_items/L/menu_items/0.json').respond({
                'short_name': 'L1',
                'a': 'test',
            });
            menuService.getMenuItemByShortName('L1').then(r => {
                expect(r).toEqual({
                    'a': 'test',
                    'categoryShortName': 'L',
                    'image': 'images/menu/L/L1.jpg',
                    'short_name': 'L1',
                })
                done();
            });
            $httpBackend.flush();
        });
    });
});