define(['app', 'jquery'], function(App, $) {

    QUnit.module("App module testing", {});

    QUnit.test("Test render", function (assert) {

        var myApp = new App(document.getElementById('qunit-fixture'));
        myApp.render();

        assert.equal($('#qunit-fixture').text() == 'RequireJS up and running');
    });
});
