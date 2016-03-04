import { createStore } from 'redux';
import ChatRooms from './reducers/chat_rooms';

let initialState = {
  user: {
    name: 'Serg'
  },
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
  }],
  currentChatRoom: null
};

const AppStore = createStore(ChatRooms, initialState);

console.log('Initial store state');
console.log(AppStore.getState());

export default AppStore;
