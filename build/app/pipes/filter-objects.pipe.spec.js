"use strict";
var filter_objects_pipe_1 = require('./filter-objects.pipe');
describe('FilterObjectsPipe', function () {
    it('Object array filtered down to a single object', function () {
        var filterObjectsPipe = new filter_objects_pipe_1.FilterObjectsPipe();
        var inputObjectArray = [
            { name: 'Brent', job: 'Solutions' },
            { name: 'Gary', job: 'Data' },
            { name: 'Jamie', job: 'Systems' },
            { name: 'John', job: 'Infrastructure' },
            { name: 'Paul', job: 'Enterprise' },
            { name: 'Rick', job: 'Network' }
        ];
        var outputObjectArray = filterObjectsPipe.transform(inputObjectArray, 'Paul');
        expect(outputObjectArray.length).toEqual(1);
    });
    it('Object array filtered down to 2 objects', function () {
        var filterObjectsPipe = new filter_objects_pipe_1.FilterObjectsPipe();
        var inputObjectArray = [
            { name: 'Brent', job: 'Business' },
            { name: 'Gary', job: 'Solutions' },
            { name: 'Jamie', job: 'Solutions' },
            { name: 'John', job: 'Operations' },
            { name: 'Paul', job: 'Business' },
            { name: 'Rick', job: 'Operations' }
        ];
        var outputObjectArray = filterObjectsPipe.transform(inputObjectArray, 'Operations');
        expect(outputObjectArray.length).toEqual(2);
    });
});

//# sourceMappingURL=filter-objects.pipe.spec.js.map
