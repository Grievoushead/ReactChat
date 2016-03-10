import React from 'react';
import UserPanel from './user_panel.jsx';
import ChatRoomsFilter from './chat_rooms_filter.jsx';
import ChatRoomsList from './chat_rooms_list.jsx';
import ChatRoom from './chat_room.jsx';

class Chat extends React.Component {

 render() {

   let {store} = this.context;
   let state = store.getState();

   return (
     <div className="container-fluid" id="main">
         <div className="row row-offcanvas row-offcanvas-left">
             <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
               <UserPanel/>
               <ChatRoomsFilter/>
               <ChatRoomsList chatRooms={state.chatRooms}/>
             </div>
             <ChatRoom current={state.currentChatRoom}/>
         </div>
     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
Chat.contextTypes = {
  store: React.PropTypes.object
};

export default Chat;
