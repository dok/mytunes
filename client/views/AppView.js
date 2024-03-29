// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new PlaylistViewContainer({collection: this.model.get('playlists')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function(){
    // var queueViewHTML = this.queueView.$el;
    // queueViewHTML.prepend(this.playlistView.$el);

    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el,
      this.playlistView.$el
    ]);
  }

});
