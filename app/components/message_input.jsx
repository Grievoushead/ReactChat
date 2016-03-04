import React from 'react';

class MessageInput extends React.Component {
 render() {
   return (
     <form className="message-input">
       <fieldset className="form-group">
          <label htmlFor="exampleTextarea">Message</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </fieldset>
        <button type="submit" className="btn btn-primary pull-right">Submit</button>
     </form>
   )
 }
}

export default MessageInput;
