var MyRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        "home": "home",
    },
    routes: {
        "hello/:username": "helloTest"
    },
    helloTest: function(name) {
        alert(name);
    }
})
app.addInitializer(function(options) {
    new MyRouter({
        controller: new TestController(),
        appRoutes: {
            "message": "message"
        }
    });
    Backbone.history.start();
})
