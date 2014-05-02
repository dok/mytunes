var Playlist = Songs.extend({

  initialize: function(name) {

  }



});

var PlaylistModel = Backbone.Model.extend({
  initialize: function(playlistName) {
    var playlist = new Playlist();
    this.set({'playlistName': playlistName});
    this.set('playlist', playlist);
  },

  add: function(song) {
    this.get('playlist').add(song);
    this.trigger('addSong', song);
  },

  setAsCurrent: function() {
    this.trigger('setAsCurrent', this);
  },

  addToQueue: function() {
    this.trigger('addAllToQueue', this);
  }
});

var Playlists = Backbone.Collection.extend({

  model: PlaylistModel

});

