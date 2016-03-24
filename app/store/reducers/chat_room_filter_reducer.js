import {CHAT_ROOM_FILTER_CHANGE} from '../actions/action_types';

// Reducer is a pure function
// DO NOT: Mutate its arguments;
// DO NOT: Perform side effects like API calls and routing transitions;
// DO NOT: Call non-pure functions, e.g. Date.now() or Math.random().

export default (state = {}, action) => {

  switch (action.type) {

    case CHAT_ROOM_FILTER_CHANGE:
      // using ImmutableJS Map will return new map with updated property
      return state.set('chatRoomFilterQuery', action.filterQuery);

    default:
      return state;
  }
};
