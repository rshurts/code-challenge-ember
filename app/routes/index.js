import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('https://nuvi-challenge.herokuapp.com/activities');
  }
});
