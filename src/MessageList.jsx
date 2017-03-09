import React, {Component} from 'react';

class MessageList extends Component {

  render() {
    console.log('Rendering <MessageList/>');
    return (
      <div>
        {this.props.messages.map((message => {
          console.log(this.props.color);
            if(message.type == 'incomingNotification') {

              return (
                <div className="message" key={message.id}>
                  <div className="message system">
                  <span className="message-content">{message.content}</span>
                  </div>
                </div>
              );

            } else {

              return(
                <div className="message" key={message.id}>
                  <span className="message-username" style= {{color: this.props.color}}>{message.username || 'Anonymous'}</span>
                  <span className="message-content">{message.content}</span>
                </div>
              );
            }
          }))}
        </div>

    );
  }
}
export default MessageList;
