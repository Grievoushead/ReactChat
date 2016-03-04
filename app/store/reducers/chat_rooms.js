import * as ACTION_TYPES from '../actions/action_types';

// reducer is a pure function
// do not modify state
// return new state with refs to objects which didn't affected
const ChatRooms = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.CHAT_ROOM_ENTER:
      let chatRoomId = action.id; // 2

      var chatRooms = [];
      var currentChatRoom = null;
      state.chatRooms.forEach((chatRoom, i) => {
        var cr;
        if (chatRoom.id === chatRoomId) {
          // make new chatroom active
          cr = {};
          Object.assign(cr, chatRoom, {active: true});
          currentChatRoom = cr;
        } else if (chatRoom.active){
          // make prev active chatroom inactive
          cr = {};
          Object.assign(cr, chatRoom, {active: false});
        } else {
          // chatRoom not affected, keep same ref
          cr = chatRoom;
        }

        chatRooms[i] = cr;
      });

      return {user: state.user, chatRooms, currentChatRoom};
    default:
      return state;
  }
}

export default ChatRooms;
