import React from 'react';
import ChatHistory from './chat_history.jsx';
import MessageInput from './message_input.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitMessage } from '../store/actions/action_creators';

class ChatRoom extends React.Component {
 render() {
   let curChatRoom = this.props.current;

   let messages = curChatRoom !== null ? curChatRoom.messages : [];

   let curChatRoomId = curChatRoom !== null ? curChatRoom.id : null;

   // Injected by react-redux:
   let { dispatch } = this.props
   // bind each action with dispatch
   let boundActionCreators = bindActionCreators({submitMessage}, dispatch);

   return (
     <div className="col-md-9 col-lg-10 chat-room">
         <ChatHistory messages={messages}/>
         <MessageInput currentChatRoomId={curChatRoomId} {...boundActionCreators}/>
     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
ChatRoom.propTypes  = {
  current: React.PropTypes.shape({
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
    })
}

const mapStateToProps = (state) => {
  let curChatRoom = state.get('currentChatRoom');
  return {
    current: curChatRoom !== null ? curChatRoom.toJS() : null
  }
}

// wrapper that connect redux state to component props
// and dispatch/subscribe actions
export default connect(mapStateToProps/*, mapDispatchToProps*/)(ChatRoom);
