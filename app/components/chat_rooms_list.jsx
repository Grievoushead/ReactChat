import React from 'react';
import ChatRoomsListLine from './chat_rooms_list_line.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { enterChatRoom } from '../store/actions/action_creators';

class ChatRoomsList extends React.Component {

  constructor(props, test) {
    super(props);
  }

 render() {

    // Injected by react-redux:
   let { dispatch } = this.props;
   // bind each action with dispatch
   let boundActionCreators = bindActionCreators({enterChatRoom}, dispatch);

   let chatRooms = this.props.chatRooms;

   return (
     <div className="list-group user-list">
       {chatRooms.map(chatRoom =>
         <ChatRoomsListLine
           key={chatRoom.id}
           id={chatRoom.id}
           name={chatRoom.user.name}
           active={chatRoom.active}
           messagesCount={chatRoom.messages.length}
           {...boundActionCreators} />)}
     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
ChatRoomsList.propTypes  = {
  chatRooms: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      user: React.PropTypes.shape({
          name: React.PropTypes.string.isRequired
      }).isRequired,
      messages: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          inсoming: React.PropTypes.bool.isRequired,
          text: React.PropTypes.string.isRequired
        })),
      active: React.PropTypes.bool.isRequired
    }).isRequired
  )
}

const mapStateToProps = (state) => {
  if (state.chatRoomFilterQuery.length) {
    return {
      chatRooms: state.chatRooms.filter(room=>~room.user.name.indexOf(state.chatRoomFilterQuery))
    }
  } else {
    return {
      chatRooms: state.chatRooms
    }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// wrapper that connect redux state to component props
// and dispatch/subscribe actions
export default connect(mapStateToProps/*, mapDispatchToProps*/)(ChatRoomsList);
