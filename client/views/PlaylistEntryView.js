var PlaylistEntryView = Backbone.View.extend({

  className: 'playlistEntry',

  template: _.template($('#playlistTemplate').html()),

  initialize: function() {
    this.render();
  },

  events: {
    'click .dequeue button': function() {
      // console.log('do sth');
      // this.trigger('dequeue', this);
      this.model.removeFromPlaylist();
      // this.render();
      $(this.$el).remove();
    }
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    return this.$el.html(html);
  }

});
