// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function() {
      this.trigger('dequeue');
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function() {
      this.shift();
    }, this);
    this.on('removeAt', function(song) {
      var isFirst = false;
      if (song.cid === this.at(0).cid) {
        isFirst = true;
      }
      if (isFirst) {
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);

  },
  playFirst: function() {
    this.at(0).play();
    // this.trigger('playFirst', this);
  }

});
