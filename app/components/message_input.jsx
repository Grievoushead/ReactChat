import React from 'react';

class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    // need for passing this inside methods
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // this will trigger event
    // and redux will trigger parent component to redraw b/c of state change

    let msg = this.state.message;

    this.setState({message: ''});

    this.props.submitMessage(this.props.currentChatRoomId, msg);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.handleSubmit}>
        <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Message</label>
          <textarea onChange={this.handleChange} className="form-control" id="exampleTextarea" rows="3" value={this.state.message}></textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary pull-right">Submit</button>
      </form>
    )
  }
}

// provides type security level
// react will throw error if types are not matching
MessageInput.propTypes = {
  submitMessage: React.PropTypes.func.isRequired,
  currentChatRoomId: React.PropTypes.number
}

export default MessageInput;
