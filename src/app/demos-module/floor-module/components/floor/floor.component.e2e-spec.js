if(browser.params.runAllTests) {
    describe('Floorplan Page', () => {
        it('Page should load', () => {
            element(by.cssContainingText("a", "Floor")).click();
            expect(browser.getCurrentUrl()).toContain('/demos/floor');
        });
        it('Changing "Floor" to "Level 2" changes the floorplan drawing to show the second floor', () => {
            // Floorplans turn on and off by changing their opacity from 0 to 1
            element(by.buttonText('Level 2')).click();
            let level2 = element(by.css('.level2'));
            expect(level2.getAttribute('style')).toContain('opacity: 1;');
        });
        it('Changing "Dimension Data" radio button toggles SVG dimension data', () => {
            element.all(by.buttonText('On')).get(0).click();
            let dimensionData = element.all(by.css('.dimension')).first();
            expect(dimensionData.getAttribute('style')).toContain('opacity: 1;');
        });
        it('Changing "Flooring Zones" radio buttons changes SVG floor color for the respective rooms', () => {
            // Default is to have no flooring selected.  Once carpet, tile, or wood is selected, those respective classes will be added to objects in the SVG
            let carpet = element.all(by.buttonText('Carpet'));
            carpet.get(0).click();
            carpet.get(3).click();
            let tile = element.all(by.buttonText('Tile'));
            tile.get(1).click();
            tile.get(4).click();
            let wood = element.all(by.buttonText('Wood'));
            wood.get(2).click();
            wood.get(5).click();
            let carpetedRooms = element.all(by.css('path.carpet'));
            expect(carpetedRooms.count()).toBeGreaterThan(0);
        });
    });
}