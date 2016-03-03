define(['src/app', 'jquery'], function (App, $) {

    QUnit.test("Dummy test", function (assert) {
        assert.ok(1 == '1', "Passed!");
    });

    QUnit.test('App render', function (assert) {
        var newApp = new App(document.getElementById('qunit-fixture'));

        newApp.render();

        assert.equal($('#qunit-fixture').text(), 'RequireJS up and running');
    });
});
