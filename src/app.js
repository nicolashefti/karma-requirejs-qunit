define(function () {

    var App = function (el) {
        this.el = el;
    };

    App.prototype.render = function () {
        this.el.innerHTML = 'RequireJS up and running';
    };

    return App;
});
