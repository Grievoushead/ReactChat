import React from 'react';
import UserListLine from './user_list_line.jsx';

class UserList extends React.Component {
 render() {
   return (
     <div className="list-group user-list">
       <UserListLine/>
       <UserListLine/>
       <UserListLine/>
     </div>
   )
 }
}

export default UserList;
