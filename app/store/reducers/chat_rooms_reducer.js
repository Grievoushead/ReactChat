import {CHAT_ROOM_ENTER, CHAT_ROOM_MESSAGE_SUBMIT} from '../actions/action_types';
import {fromJS} from 'immutable';


// Reducer is a pure function
// DO NOT: Mutate its arguments;
// DO NOT: Perform side effects like API calls and routing transitions;
// DO NOT: Call non-pure functions, e.g. Date.now() or Math.random().

export default (state = {}, action) => {

  let currentChatRoom = null;
  switch (action.type) {

    case CHAT_ROOM_ENTER:
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

    case CHAT_ROOM_MESSAGE_SUBMIT:
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

    default:
      return state;
  }
};
