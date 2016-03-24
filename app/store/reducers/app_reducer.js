import * as ACTION_TYPES from '../actions/action_types';
import { fromJS } from 'immutable';

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

// Reducer is a pure function
// DO NOT: Mutate its arguments;
// DO NOT: Perform side effects like API calls and routing transitions;
// DO NOT: Call non-pure functions, e.g. Date.now() or Math.random().

export default (state = initialState, action) => {

  let currentChatRoom = null;
  switch (action.type) {

    case ACTION_TYPES.CHAT_ROOM_ENTER:
      return state.update('chatRooms', rooms =>
        rooms.map(room => {
          if (room.get('id') === action.id) {
            currentChatRoom = room.set('active', true);
            return currentChatRoom;
          } else if (room.get('active') === true) {
            return room.set('active', false);
          } else {
            return room;
          }
        })
      ).set('currentChatRoom', currentChatRoom);

    case ACTION_TYPES.CHAT_ROOM_MESSAGE_SUBMIT:
      // using ES6 object spread operator will return new obj with copy of old props
      return state.update('chatRooms', rooms =>
        rooms.map(room => {
          if (room.get('id') === action.chatRoomId) {
            currentChatRoom = room.update('messages', messages => messages.push(fromJS({inсoming:false, text: action.message})));
            return currentChatRoom;
          } else {
            return room;
          }
        })
      ).set('currentChatRoom', currentChatRoom);

    case ACTION_TYPES.CHAT_ROOM_FILTER_CHANGE:
      // using ImmutableJS Map will return new map with updated property
      return state.set('chatRoomFilterQuery', action.filterQuery);

    default:
      return state;
  }
};
