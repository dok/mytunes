// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template($('#songQueueTemplate').html()),

  events: {
    'click .dequeue': function(event) {
      this.model.remove();
      this.render();

    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
