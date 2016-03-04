import React from 'react';
import ChatHistoryLine from './chat_history_line.jsx';

class ChatHistory extends React.Component {
 render() {
   return (
     <div className="chat-history">

       <ChatHistoryLine/>

       <ChatHistoryLine/>

     </div>
   )
 }
}

export default ChatHistory;
