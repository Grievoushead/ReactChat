import React from 'react';

class UserPanel extends React.Component {
 render() {
   return (
     <div className="user-panel">
         <div className="pull-left image">
             <img src="http://demo.web-apps.ninja/Director-free/img/26115.jpg" className="img-circle" alt="User Image"/>
         </div>
         <div className="pull-left info">
             <h3>Hello, Serg!</h3>
             <h4><i className="fa fa-circle text-success"></i> Online</h4>
         </div>
      </div>
   )
 }
}

export default UserPanel;
