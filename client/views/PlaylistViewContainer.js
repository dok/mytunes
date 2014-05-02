var PlaylistViewContainer = Backbone.View.extend({

  className: 'six columns playlistContainer',

  initialize: function() {
    this.render();
  },

  events: {
    'click button.addPlaylist': function() {
      var playlistName = this.$el.find('input.playlistAdd').val();
      var newPlaylist = new PlaylistModel(playlistName);
      var newPlaylistView = new PlaylistView({model: newPlaylist});
      $('.playlistContainer').append(newPlaylistView.$el);
      this.collection.add(newPlaylist);
    }
  },

  render: function() {
    this.$el.html('<h4 class="playlists">Playlists</h4><input class="playlistAdd" placeholder="Add playlist" type="text"></input><button class="addPlaylist">+</button>')
  }



});
