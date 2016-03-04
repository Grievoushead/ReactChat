import React from 'react';
import ChatHistoryLine from './chat_history_line.jsx';

class ChatHistory extends React.Component {
 render() {

   let messages = this.props.messages;

   return (
     <div className="chat-history">

       {messages.map((msg, i) => <ChatHistoryLine key={i} message={msg}/>)}

     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
ChatHistory.propTypes  = {
  messages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      inсoming: React.PropTypes.bool.isRequired,
      text: React.PropTypes.string.isRequired
    })
  ).isRequired
}

export default ChatHistory;
