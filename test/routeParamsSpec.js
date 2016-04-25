define(['squire'], function (Squire) {
    'use strict';

    describe('routeParams', function () {
        var injector;

        beforeEach(function () {
            injector = new Squire();
        });

        afterEach(function () {
            injector.remove();
        });

        it('should parse parameters from location.search', function (done) {
            injector
                .mock('var/window', {
                    location: {
                        search: '?hello=world&foo=bar'
                    }
                })
                .require(['src/routeParams'], function (routeParams) {
                    expect(routeParams).toEqual({
                        hello: 'world',
                        foo: 'bar'
                    });

                    done();
                });
        });
    });
});
