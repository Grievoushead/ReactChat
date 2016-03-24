import * as ACTION_TYPES from '../actions/action_types';

// Shape of App State obj
const initialState = {
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
};

// Reducer is a pure function
// DO NOT: Mutate its arguments;
// DO NOT: Perform side effects like API calls and routing transitions;
// DO NOT: Call non-pure functions, e.g. Date.now() or Math.random().

export default (state = initialState, action) => {

  let currentChatRoom = null;
  switch (action.type) {

    case ACTION_TYPES.CHAT_ROOM_ENTER:

      return {
        ...state,
        chatRooms: state.chatRooms.map(room => {
          if (room.id === action.id) {
            currentChatRoom = room;
            return Object.assign({}, room, {active: true});
          } else if (room.active) {
            return Object.assign({}, room, {active: false});
          } else {
            return room;
          }
        }),
        currentChatRoom
      };

    case ACTION_TYPES.CHAT_ROOM_MESSAGE_SUBMIT:

      return {
        ...state,
        chatRooms: state.chatRooms.map(room => {
          if (room.id === action.chatRoomId) {
            currentChatRoom = Object.assign({}, room, {messages: [...room.messages, {inсoming:false, text: action.message}]});
            return currentChatRoom;
          } else {
            return room;
          }
        }),
        currentChatRoom
      };

    case ACTION_TYPES.CHAT_ROOM_FILTER_CHANGE:

      return {
        ...state,
        chatRoomFilterQuery: action.filterQuery
      };

    default:
      return state;
  }
};
