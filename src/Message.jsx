import React, {Component} from 'react';

class Message extends Component {

  render() {
    console.log('Rendering <Message/>');

    return (
      <div className="message system">
        {this.props.lastName} changed their name to {this.props.newName}.
      </div>
    );
  }
}
export default Message;
