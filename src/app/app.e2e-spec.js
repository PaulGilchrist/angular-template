/*
Hardest part of test automation is finding the right DOM element.
    Suggest adding id or name tags to elements you know will need testing
    XPath is not reliable enough

Best way to test that element was found
    svg.getAttribute('innerHTML')
        .then((text) => {
            console.log('inner HTML: ' + text);
        },
        (err) => {
            console.log('ERROR: ' + err);
        });
*/


browser.driver.manage().window().maximize();

//beforeEach(function() {
    //browser.ignoreSyncronization = true;
    browser.get('/home');
//});

describe('Home Page', function() {
    it('Title should be "Angular Template"', function() {
        expect(browser.getTitle()).toEqual('Angular Template');
    });
    it('"Getting Started" button should route to /help', function() {
        element(by.buttonText('Getting Started')).click();
        expect(browser.getCurrentUrl()).toContain('/help');
    });
});
describe('Help Page', function() {
    it('"Git Branching" button should scroll down page to proper section', function() {
        element(by.linkText('Git Branching')).click();
        expect(browser.getCurrentUrl()).toContain('/help?id=gitBranching');
    });
});
describe('Drag Demo Page', function() {
    it('Page should load', function() {
        var el = element.all(by.cssContainingText("a", "Drag")).first();
        //First will be DRAG and second will be Dragula link in page text
        el.click().then(() => {
            expect(browser.getCurrentUrl()).toContain('/demos/drag');
        });
    });
    it('Left drag container should contain 4 elements', function() {
        // list1 is expected to start with 4 and list 2 <div> will start with 3
        var list1divs = element.all(by.xpath('//*[@id="list1"]/div'));
        expect(list1divs.count()).toEqual(4);
    });
});
describe('Editor Page', function() {
    it('Page should load', function() {
        var el = element(by.cssContainingText("a", "Editor"));
        el.click().then(() => {
            expect(browser.getCurrentUrl()).toContain('/demos/editor');
        });
    });
    // it('Not Implemented - Updating WYSIWYG should update mail merge', function() {
    //     var el = element(by.xpath('//*[@id="cke_1_contents"]/iframe'));
    //     browser.switchTo().frame(el);
    //     var doc = browser.driver.findElement(protractor.By.xpath('/html/body'));
    //     doc.sendKeys('[DateToday]');
    //     expect(doc.getText()).toContain('[DateToday]');
    //     browser.switchTo().defaultContent();
    // });
});
describe('Graph Page', function() {
    it('Page should load', function() {
        var el = element(by.cssContainingText("a", "Graph"));
        el.click().then(() => {
            expect(browser.getCurrentUrl()).toContain('/demos/graph');
        });
    });
    it('Changing "Width" input should change width on charts', function() {
        var inputWidth = element(by.xpath('//graph-demo/div[1]/div[1]/div[1]/input'));
        inputWidth.clear();
        inputWidth.sendKeys('400');
        var svg = element.all(by.tagName('svg')).first();
        expect(svg.getAttribute('width')).toEqual('400');
    });
    it('Changing "Height" input should change height on charts', function() {
        var inputHeight = element(by.xpath('//graph-demo/div[1]/div[1]/div[2]/input'));
        inputHeight.clear();
        inputHeight.sendKeys('350');
        var svg = element.all(by.tagName('svg')).first();
        expect(svg.getAttribute('height')).toEqual('350');
    });
    it('Changing "Label" dropdown to "none" should remove all chart labels', function() {
        var inputLabels = element(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select'));
        // Click "none"
        element.all(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select/option')).get(0).click();
        // Both "minmax" and "all" will place a label on the first rect (0)
        var rect = element.all(by.tagName('text')).get(0);
        rect.getText()
            .then((text) => {
                expect(text.length).toEqual(0);
            });
    });
    it('Changing "Label" dropdown to "all" should add all chart labels', function() {
        var inputLabels = element(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select'));
        // Click "all"
        element.all(by.xpath('//graph-demo/div[1]/div[2]/div[1]/select/option')).get(1).click();
        // Both "none" and "minmax" will place a label on the first rect (0) but not the second (1)
        var rect = element.all(by.tagName('text')).get(1);
        rect.getText()
            .then((text) => {
                expect(text.length).toBeGreaterThan(0);
            });
    });
    it('Changing "Warning Level" input should change chart colors', function() {
        var inputWarningLevel = element(by.xpath('//graph-demo/div[1]/div[2]/div[2]/input'));
        inputWarningLevel.clear();
        // Setting warning level to zero will change color on all rects
        inputWarningLevel.sendKeys('0');
        // The first rect (0) is usually not in a warning state unless the level drops below 100
        var rect = element.all(by.tagName('rect')).get(0);
        expect(rect.getAttribute('class')).toContain('d3-warning');
    });
});
describe('Floorplan Page', function() {
    it('Page should load', function() {
        var el = element(by.cssContainingText("a", "Floor"));
        el.click().then(() => {
            expect(browser.getCurrentUrl()).toContain('/demos/floor');
        });
    });
    it('Changing "Floor" to "Level 2" changes the floorplan drawing to show the second floor', function() {
        //Floorplans turn on and off by changing their opacity from 0 to 1
        element(by.buttonText('Level 2')).click();
        var level2 = element(by.css('.level2'))
        expect(level2.getAttribute('style')).toContain('opacity: 1;');
    });
    it('Changing "Dimension Data" radio button toggles SVG dimension data', function() {
        element.all(by.buttonText('On')).get(0).click();
        var dimensionData = element.all(by.css('.dimension')).first();
        expect(dimensionData.getAttribute('style')).toContain('opacity: 1;');
    });
    it('Not Implemented - Changing "Flooring Zones" radio buttons changes SVG floor color for the respective rooms', function() {
        //Default is to have no flooring selected.  Once carpet, tile, or wood is selected, those respective classes will be added to objects in the SVG
        var carpet = element.all(by.buttonText('Carpet'))
        carpet.get(0).click();
        carpet.get(3).click();
        var tile = element.all(by.buttonText('Tile'))
        tile.get(1).click();
        tile.get(4).click();
        var wood = element.all(by.buttonText('Wood'))
        wood.get(2).click();
        wood.get(5).click();
        var carpetedRooms = element.all(by.tagName('path')).filter((el) => {
            return el.element(by.css('.carpet'));
        });
        expect(carpetedRooms.count()).toBeGreaterThan(0);
    });
});
// describe('PDF Page', function() {
//     it('Page should load', function() {
//         var el = element(by.cssContainingText("a", "PDF"));
//         el.click().then(() => {
//             expect(browser.getCurrentUrl()).toContain('/demos/pdf');
//         });
//     });
//     it('Not Implemented - Selecting "View PDF" button opens new window with PDF generated', function() {
//         expect(true).toBeTruthy();
//     });
//     it('Not Implemented - Selecting "View Modal" button opens modal window', function() {
//         expect(true).toBeTruthy();
//     });
// });
// describe('User Page', function() {
//     it('Page should load', function() {
//         var el = element(by.cssContainingText("a", "User"));
//         el.click();
//         expect(browser.getCurrentUrl()).toContain('/user');
//     });
//     it('Selecting user from list populates user and address edit forms', function() {
//         // var row = element(by.xpath('/html/body/my-app/div/main/user-home/div[2]/div/user-list/div/div/div[2]/div[1]/div/table/tbody/tr[1]'));
//         var row = element(by.xpath('//user-list//tbody/tr[1]'));
//         row.click();
//         expect(element(by.id('user-form')).isDisplayed()).toBeTruthy();
//     });
//     it('Save is disabled if user form has not changed, or fails validation', function() {
//         //Assumes a user is already selected from the list
//         var saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
//         expect(saveButton.getAttribute('disabled')).toBeTruthy();
//     });
//     it('Save is enabled once user form has changed', function() {
//         //Assumes a user is already selected from the list
//         var firstName = element(by.xpath('//*[@id="user-form"]/form/div[1]/div[1]/input'));
//         firstName.clear();
//         firstName.sendKeys('Aar');
//         firstName.sendKeys(protractor.Key.TAB);
//         var saveButton = element(by.xpath('//*[@id="user-form"]/form/button[1]'));
//         expect(saveButton.getAttribute('disabled')).toBeFalsy();
//     });

// });



// browser.manage().logs().get('browser').then(function(browserLogs) {
//    // browserLogs is an array of objects with level and message fields
//    browserLogs.forEach(function(log){
//       if (log.level.value > 900) { // it's an error log
//         console.log('Browser console error!');
//         console.log(log.message);
//       }
//    });
// });