import React from 'react';

class UserListLine extends React.Component {
 render() {
   return (
     <a href="#" className="list-group-item user-list-item active">
       <h4 className="list-group-item-heading">
         <i className="fa fa-circle text-success"></i>
         Jane Smith
         <span className="label label-danger label-pill pull-xs-right">14</span>
       </h4>
     </a>
   )
 }
}

export default UserListLine;
