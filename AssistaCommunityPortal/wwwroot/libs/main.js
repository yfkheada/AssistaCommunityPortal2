(function ($) {
    //demo data
    var persons = [{ name: "Person 1", address: "Address 1", tel: "0123456789", email: "example@gmail.com", type: "family" }, { name: "Person 2", address: "Address 2", tel: "0123456789", email: "example@gmail.com", type: "family" },
    ];
    //define product model
    var user = Backbone.Model.extend({
        defaults: {
            id: 1,
            username: "test",
            email: "",
            name: "",
            facilityId: null,
            facility: "",
            ticket: null,
            usersession: null,
            completed: false
        },
        initialize: function () {
            console.log('Book has been initialized');
            this.on("invalid", function (model, error) {
                console.log("Houston, we have a problem: " + error)
            });
        },
        constructor: function (attributes, options) {
            console.log('Book\'s constructor had been called');
            Backbone.Model.apply(this, arguments);
        },
        url:'/users'
    });
    var myUsers = Backbone.Collection.extend({
        model: user,
        url: '/users/GetAll'
    });
    //var todos = new myUsers();
    //todos.fetch(); // sends HTTP GET to /todos

    //define individual person view
    var PersonView = Backbone.View.extend({
        initialize: function () {
            console.log("PersonView view got initialized");
        },
        tagName: "article",
        className: "person-container",
        template: $("#personTemplate").html(),
        render: function () {
            var tmpl = _.template(this.template);
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });
    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#users"),

        initialize: function () {
            
            this.collection = new myUsers();
            //this.listenTo(this.collection, 'change', this.render);
            var _thisView = this; // need to be able to refer to 'this' context in the callback
            this.collection.fetch().done(function () { // queue up this callback to run when fetch() completes
                _thisView.render();
            });
        },
        events: {
            'click #btnSave': "updateUser"
        },
        updateUser: function (userResponse) {
            var userNameEdit = this.$el.find("#txtNameEdit").val();
            if (userNameEdit != "") {
                var myUser = new user();
                myUser = this.collection.models[0];
                //myUser.set({ username: 'testaaaa' });
                myUser.save({ username: userNameEdit, email: 'aaaa@aaa' }, {
                    url: '/users/Edit/' + myUser.get('id'),
                    wait: true,
                    success: function () {
                        var templateTemp = $("#personTemplate").html();
                        this.$el.html(_.template(templateTemp, { name: myUser.get('name') }));
                    },
                    error: function () { alert('update error'); }
                });
            }
        },
        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new PersonView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });
    //create instance of master view
    var directory = new DirectoryView();
}(jQuery));