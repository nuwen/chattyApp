import React, {Component} from 'react';

class MessageList extends Component {

    render() {
        console.log('Rendering <MessageList/>');

        return (
          <ol>
            {this.props.messages.map((message => {
              console.log(message.username);
              return (
                <div className="message">
                <span className="message-username">{message.username}</span>
                <span className="message-content">{message.content}</span>
                </div>
              );

            }))}
          </ol>

        );
    }
}
export default MessageList;
