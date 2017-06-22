/**
 * Created by ubt on 2017/6/22.
 */
var app = app || {};

app.Book = Backbone.Model.extend({
    defaults:{
        coverImage: 'img/placeholder.png',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
})