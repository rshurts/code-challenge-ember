import Ember from 'ember';

export function sentimentColor(sentiment) {
  if (sentiment < 0) {
    return 'negative';
  } else if (sentiment > 0) {
    return 'positive';
  }
  return 'neutral';
}

export default Ember.Helper.helper(sentimentColor);
