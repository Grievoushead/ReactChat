import React from 'react';
import ChatRoomsListLine from './chat_rooms_list_line.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterChange } from '../store/actions/action_creators';

class ChatRoomsFilter extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   filterQuery: ''
    // };
    // need for passing this inside methods
    this.handleChange = this.handleChange.bind(this);

    // Injected by react-redux:
   let { dispatch } = this.props;
   // bind each action with dispatch
   this.boundActionCreators = bindActionCreators({filterChange}, dispatch);
  }

  handleChange(event) {
    //this.setState({filterQuery: event.target.value});
    this.boundActionCreators.filterChange(event.target.value);
  }

 render() {
   return (
     <div>
       <input type="text" className="form-control" onChange={this.handleChange} />
     </div>
   )
 }
}

// provides type security level
// react will throw error if types are not matching
// ChatRoomsList.propTypes  = {
//   chatRooms: React.PropTypes.arrayOf(
//     React.PropTypes.shape({
//       id: React.PropTypes.number.isRequired,
//       user: React.PropTypes.shape({
//           name: React.PropTypes.string.isRequired
//       }).isRequired,
//       messages: React.PropTypes.arrayOf(
//         React.PropTypes.shape({
//           inсoming: React.PropTypes.bool.isRequired,
//           text: React.PropTypes.string.isRequired
//         })),
//       active: React.PropTypes.bool.isRequired
//     }).isRequired
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     chatRooms: state.chatRooms
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// wrapper that connect redux state to component props
// and dispatch/subscribe actions
export default connect()(ChatRoomsFilter);
