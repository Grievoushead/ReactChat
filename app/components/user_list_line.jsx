import React from 'react';

class UserListLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({
    //   active: !this.state.active
    // });
    this.props.enterChatRoom(this.props.id);
  }

  render() {
    console.log(this.props);

    return (
      <a href="#" onClick={this.handleClick} className={"list-group-item user-list-item " + (this.props.active ? 'active' : '')}>
       <h4 className="list-group-item-heading">
         <i className="fa fa-circle text-success"></i>
         Jane Smith
         <span className="label label-danger label-pill pull-xs-right">14</span>
       </h4>
      </a>
    )
  }
}

UserListLine.propTypes = {
  enterChatRoom: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool.isRequired
}

export default UserListLine;
