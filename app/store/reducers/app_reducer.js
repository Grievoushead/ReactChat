import * as ACTION_TYPES from '../actions/action_types';
import chatRoomFilterReducer from './chat_room_filter_reducer';
import chatRoomsReducer from './chat_rooms_reducer';

// Reducer is a pure function
// DO NOT: Mutate its arguments;
// DO NOT: Perform side effects like API calls and routing transitions;
// DO NOT: Call non-pure functions, e.g. Date.now() or Math.random().

export default (state = initialState, action) => {

  switch (action.type) {

    case ACTION_TYPES.CHAT_ROOM_ENTER:
    case ACTION_TYPES.CHAT_ROOM_MESSAGE_SUBMIT:
      return chatRoomsReducer(state, action);

    case ACTION_TYPES.CHAT_ROOM_FILTER_CHANGE:
      return chatRoomFilterReducer(state, action);

    default:
      return state;
  }
};
