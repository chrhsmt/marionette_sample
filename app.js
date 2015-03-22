var templateManager = new Marionette.TemplateManager({dirname: "partials/"});
$(function() {
    app.addRegions({
        mainRegion: "#main-region",
        header: "header"
    })

    app.Contact = Backbone.Model.extend({});
    app.ContactView = Marionette.ItemView.extend({
        template: "#contact-template"
    });
    app.HeaderView = Marionette.ItemView.extend({
        template: "header"
    })

    app.on("start", function() {
        console.log("app start.")
        var contact = new app.Contact({
            firstname: "alice",
            lastname: "cooper"
        })
        var view = new app.ContactView({
            model: contact
        })
        var headerView = new app.HeaderView({})
        app.mainRegion.show(view);
        templateManager.template("header").done(function() {
            app.header.show(headerView);
        })
    })
    app.start();
})