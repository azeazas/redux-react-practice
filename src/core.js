import {List} from 'immutable';

expect function setEntries(state, entries) {
  return state.set('entries', List(entries));
}
