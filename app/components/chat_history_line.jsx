import React from 'react';

class ChatHistoryLine extends React.Component {
 render() {
   console.log('ChatHistoryLine call');

   let message = this.props.message;

   console.log('message received:');
   console.log(message);

   return (
     <div className="alert alert-info chat-line" role="alert">
       <div className="pull-left image">
           <img src="http://demo.web-apps.ninja/Director-free/img/26115.jpg" className="img-circle" alt="User Image"/>
       </div>
       <div className="pull-left message">
           <strong>Jane Smith says: </strong> {message}
       </div>
     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
ChatHistoryLine.propTypes  = {
  message: React.PropTypes.string.isRequired
}

export default ChatHistoryLine;
