import React from 'react';

class ChatHistoryLine extends React.Component {
 render() {
   return (
     <div className="alert alert-info chat-line" role="alert">
       <div className="pull-left image">
           <img src="http://demo.web-apps.ninja/Director-free/img/26115.jpg" className="img-circle" alt="User Image"/>
       </div>
       <div className="pull-left message">
           <strong>Jane Smith says: </strong> This alert needs your attention, but it's not super important.
       </div>
     </div>
   )
 }
}

export default ChatHistoryLine;
