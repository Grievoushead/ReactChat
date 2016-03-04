import React from 'react';
import UserListLine from './user_list_line.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as ActionCreators from '../store/actions/action_creators';

class UserList extends React.Component {

  constructor(props, test) {
    super(props);
    debugger
  }

 render() {
   console.log('UserList render:');
   console.log('UserList props:');
   console.log(this.props);
    // Injected by react-redux:
   let { dispatch } = this.props
   // bind each action with dispatch
   let boundActionCreators = bindActionCreators(ActionCreators, dispatch)
   console.log(boundActionCreators);

   let chatRooms = this.props.chatRooms;
   console.log('chatRooms received:');
   console.log(chatRooms);

   return (
     <div className="list-group user-list">
       {chatRooms.map(chatRoom => <UserListLine key={chatRoom.id} id={chatRoom.id} name={chatRoom.user.name} active={chatRoom.active} {...boundActionCreators} />)}
     </div>
   )
 }
}


// UserList.propTypes  = {
//   chatRooms: React.PropTypes.arrayOf(
//     React.PropTypes.shape({
//       id: React.PropTypes.number.isRequired,
//       user: React.PropTypes.bool.isRequired,
//       text: React.PropTypes.string.isRequired
//     }).isRequired)
//   )
// }

const mapStateToProps = (state) => {
  return {
    chatRooms: state.chatRooms
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// wrapper that connect redux state to component props
// and dispatch/subscribe actions
export default connect(mapStateToProps/*, mapDispatchToProps*/)(UserList);
