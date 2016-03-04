import * as ACTION_TYPES from './action_types';

export function enterChatRoom(id) {
  return {
    type: ACTION_TYPES.CHAT_ROOM_ENTER,
    id
  }
}
