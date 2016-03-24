import { createStore } from 'redux';
import AppReducer from './reducers/app_reducer';
import {fromJS} from 'immutable';

// Shape of App State obj
const initialState = fromJS({
  user: {
    name: 'Serg'
  },
  currentChatRoom: null,
  chatRoomFilterQuery: '',
  chatRooms: [{
    id: 0,
    user: {
      name: 'Jane Smith'
    },
    messages: [{
        inсoming: true,
        text: 'Hello Serg, How are you?'
      }, {
          inсoming: true,
          text: 'How was your day?'
      }],
    active: false
  }, {
    id: 1,
    user: {
      name: 'Tom Hanks'
    },
    messages:[{
        inсoming: true,
        text: 'Hi Tom, thanks for the book, it was very interesting.'
      }],
    active: false
  }, {
    id: 2,
    user: {
      name: 'Will Smith'
    },
    messages: [{
        inсoming: false,
        text: 'Hi Will, you last movie, was incredible.'
      }],
    active: false
  }]
});

const AppStore = createStore(AppReducer, initialState);

console.log('Initial store state');
console.log(AppStore.getState());

export default AppStore;
