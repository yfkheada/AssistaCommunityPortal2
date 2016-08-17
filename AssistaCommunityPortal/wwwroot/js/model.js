var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    }
});



var Catalog = Backbone.Model.extend({
    defaults: {
        ID: "",
        CatalogName: ""
    },

    bookChanged : function(book) {
        alert(book.get("BookName"));
    }
});