import React from 'react';

class UserListLine extends React.Component {

  constructor(props) {
    super(props);
    // state not needed b/c it is in redux single state tree
    // this.state = {
    //   active: props.active
    // };

    // need for passing this inside methods
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this will trigger event
    // and redux will trigger parent component to redraw b/c of state change
    this.props.enterChatRoom(this.props.id);
  }

  render() {

    return (
      <a href="#" onClick={this.handleClick} className={"list-group-item user-list-item " + (this.props.active ? 'active' : '')}>
       <h4 className="list-group-item-heading">
         <i className="fa fa-circle text-success"></i>
         {this.props.name}
         <span className="label label-danger label-pill pull-xs-right">14</span>
       </h4>
      </a>
    )
  }
}

// provides type security level
// react will throw error if types are not matching
UserListLine.propTypes = {
  enterChatRoom: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool.isRequired
}

export default UserListLine;
