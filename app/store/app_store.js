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
    messages: ['Hello'],
    active: false
  }, {
    id: 1,
    user: {
      name: 'Tom Hanks'
    },
    messages: ['Hello'],
    active: false
  }, {
    id: 2,
    user: {
      name: 'Will Smith'
    },
    messages: ['Hello'],
    active: false
  }]
};

const AppStore = createStore(ChatRooms, initialState);

console.log('Current store state');
console.log(AppStore.getState());

export default AppStore;
