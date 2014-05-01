// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td class="dequeue"><button>X</button></td>'),

  events: {
    // 'click .dequeue': function() {
    //   // this.model.dequeue();
    //   // this.render();
    //   this.collection.remove(this.model);

    // }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
