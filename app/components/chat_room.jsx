import React from 'react';
import ChatHistory from './chat_history.jsx';
import MessageInput from './message_input.jsx';
import { connect } from 'react-redux';

class ChatRoom extends React.Component {
 render() {
   let curChatRoom = this.props.current;
   console.log('ChatRoom render call');
   console.log('Current chat room:');
   console.log(curChatRoom);

   let messages = curChatRoom !== null ? curChatRoom.messages : [];

   console.log(messages);
   return (
     <div className="col-md-9 col-lg-10 chat-room">
         <ChatHistory messages={messages}/>
         <MessageInput/>
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
      messages: React.PropTypes.arrayOf(React.PropTypes.string),
      active: React.PropTypes.bool.isRequired
    })
}

const mapStateToProps = (state) => {
  return {
    current: state.currentChatRoom
  }
}

// wrapper that connect redux state to component props
// and dispatch/subscribe actions
export default connect(mapStateToProps/*, mapDispatchToProps*/)(ChatRoom);
