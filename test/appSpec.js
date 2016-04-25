define(['src/app'], function (App) {

    var fixtureDiv;

    beforeEach(function () {
        fixtureDiv = document.createElement('div');
        fixtureDiv.setAttribute('id', 'fixture-div');
    });

    describe('Dummy test', function () {
        it('should be always a big test success', function () {
            expect(true).toEqual(1 > 0);
        });
    });

    describe('App bootstrap', function () {
        it('should render a message in the fixture div', function () {

            var newApp = new App(fixtureDiv);
            newApp.render();

            expect(fixtureDiv.innerHTML).toEqual('RequireJS up and running');
        });
    });
});
