import * as ACTION_TYPES from '../actions/action_types';

const ChatRooms = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.CHAT_ROOM_ENTER:
      debugger
      let chatRoomId = action.id; // 2

      var chatRoom = state.chatRooms[chatRoomId];
      // return state with only 1 item new
      return {
        user: state.user,
         chatRooms: [
          state.chatRooms[0],
          state.chatRooms[1],
          Object.assign({}, chatRoom, {active: true}),
        ]
      };
      break;
    default:
      return state;
  }
}

export default ChatRooms;
