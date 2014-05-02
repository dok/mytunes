// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "div",

  className: 'six columns sidebar',

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('remove', function() {
      this.render();
    }, this);
  },

  events: {

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('').prepend(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
