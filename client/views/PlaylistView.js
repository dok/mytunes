var PlaylistView = Backbone.View.extend({

  className : 'playlist',

  initialize: function() {
    this.render(this.model.get('playlistName'));
    // $('.playlistContainer').append(this.$el);

    this.model.on('change:isActive', function() {
      this.$el.toggleClass('active');
    }, this);

    this.model.on('addSong', function(song) {
      // this.render();
      var newPlaylistSong = new PlaylistEntryView({model: song});
      this.$el.append(newPlaylistSong.render());
    }, this);
  },

  events: {
    'click .playlistName': function() {
      this.model.setAsCurrent();
    },
    'click .addToQueue': function() {
      console.log('testing');
      this.model.addToQueue();
    }
  },

  render: function(playlistName) {
    // this.$el.children().detach();

    this.$el.append('<div class="playlistHeader"><h5 class="playlistName">'+playlistName+'</h5><span class="addToQueue">Add playlist to queue</span></div>');
      // this.collection.map(function(song) {
        // return new PlaylistEntryView({model: song}).render();
      // }));
  }

});
