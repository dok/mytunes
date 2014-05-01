// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "div",

  className: 'six columns',

  initialize: function() {
    this.render();
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.collection.on('dequeue', function() {
      this.render();
    }, this);
    this.collection.on('ended', function() {
      this.render();
    }, this);
    this.collection.on('removeAt', function() {
      this.render();
    }, this);
    // this.collection.on('change', this.render, this); why?
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
