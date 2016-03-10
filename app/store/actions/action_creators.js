import * as ACTION_TYPES from './action_types';

export function enterChatRoom(id) {
  return {
    type: ACTION_TYPES.CHAT_ROOM_ENTER,
    id
  }
}

export function submitMessage(chatRoomId, message) {
  return {
    type: ACTION_TYPES.CHAT_ROOM_MESSAGE_SUBMIT,
    chatRoomId,
    message
  }
}

export function filterChange(filterQuery) {
  return {
    type: ACTION_TYPES.CHAT_ROOM_FILTER_CHANGE,
    filterQuery
  }
}
