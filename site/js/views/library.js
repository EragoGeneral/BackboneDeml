/**
 * Created by ubt on 2017/6/22.
 */
var app = app || {};

app.LibraryView = Backbone.View.extend({
   el : '#books',
    initialize: function (initialBooks) {
        this.collection = new app.Library(initialBooks);
        this.render();

        this.listenTo(this.collection, 'add', this.renderBook);
    },
    events:{
        'click #add' : 'addBook'
    },

    addBook: function(e){
        e.preventDefault();

        var formData = {};
        $('#addBook div').children('input').each(function(i,el){
            if($(el).valueOf() != ''){
                formData[el.id] = $(el).val();
            }
        });
        formData['coverImage'] = 'img/placeholder.png';
        this.collection.add(new app.Book(formData));
    },

    render: function () {
        var that = this;
        // 回调里的 this 是作为参数传入 遍历函数 each， 可用于调用 renderBook
        this.collection.each(function (item) {
            this.renderBook(item);
            //that.renderBook(item);
            console.log(item.attributes.title);
        }, this);
    },
    renderBook: function (item) {
        var bookView = new app.BookView({
           model: item
        });
        this.$el.append(bookView.render().el)
    }
});