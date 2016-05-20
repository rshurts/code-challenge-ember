import Ember from 'ember';

export function sentimentPanel(sentiment) {
    if (sentiment < 0) {
    return 'panel-danger';
  } else if (sentiment > 0) {
    return 'panel-success';
  }
  return 'panel-warning';
}

export default Ember.Helper.helper(sentimentPanel);
