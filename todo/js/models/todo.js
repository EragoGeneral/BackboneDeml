/**
 * Created by ubt on 2017/6/21.
 */
var app = app || {};

app.Todo = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the `completed` state of this todo item.
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});
