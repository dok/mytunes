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
      console.log('test', song);
      this.remove(song);
    }, this);

  },
  playFirst: function() {
    this.at(0).play();
    // this.trigger('playFirst', this);
  }

});
