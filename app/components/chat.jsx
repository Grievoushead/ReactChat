import React from 'react';
import UserPanel from './user_panel.jsx';
import UserList from './user_list.jsx';
import ChatRoom from './chat_room.jsx';

class Chat extends React.Component {
 render() {
   return (
     <div className="container-fluid" id="main">
         <div className="row row-offcanvas row-offcanvas-left">
             <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
               <UserPanel/>
               <UserList/>
             </div>
             <ChatRoom/>
         </div>
     </div>
   )
 }
}

export default Chat;
