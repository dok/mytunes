// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  className: 'songItem',

  template: _.template($('#libraryEntryTemplate').html()),

  initialize: function() {

  },

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    var html = this.template(this.model.toJSON());
    return this.$el.html(html);
  }

});
