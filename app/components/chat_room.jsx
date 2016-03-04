import React from 'react';
import ChatHistory from './chat_history.jsx';
import MessageInput from './message_input.jsx';

class ChatRoom extends React.Component {
 render() {
   return (
     <div className="col-md-9 col-lg-10 chat-room">
         <ChatHistory/>
         <MessageInput/>
     </div>
   )
 }
}

export default ChatRoom;
