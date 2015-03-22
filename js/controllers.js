var TestController = Marionette.Controller.extend({
    initialize: function() {
        console.log("TestController initialized...")
    },
    home: function() {
        console.log("I'm home!")
    },
    message: function() {
        app.MessageView = Backbone.Marionette.ItemView.extend({
            template: "message"
        });
        app.Message = Backbone.Model.extend({});
        $.ajax("/data/message.json").then(function(data) {
            templateManager.template("message").done(function() {
                view = new app.MessageView({
                    model: new app.Message({message: data.message})
                })
                app.mainRegion.show(view);
            })
        })
    }
})