import React from 'react';
import ChatHistoryLine from './chat_history_line.jsx';

class ChatHistory extends React.Component {
 render() {

   console.log('ChatHistory render call');
   let messages = this.props.messages;

   console.log('messages received:');
   console.log(messages);

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
  messages: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}

export default ChatHistory;
