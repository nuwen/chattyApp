import React, {Component} from 'react';

function urlDetector(string){
  let splitString = string.split(' ');

  let newContent = splitString.map((word) => {
    if (word.endsWith('.gif') || word.endsWith('.jpeg') || word.endsWith('.png')) {
      return `<br><img style="height: 60%; width: 60%" src=${word}><br>`;
    } else {
      return word;
    }
  });
  let newString = newContent.join(' ');
  return {__html: newString};
}

class MessageList extends Component {

  render() {
    console.log('Rendering <MessageList/>');
    return (
      <div>
        {this.props.messages.map((message => {
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
                  <span className="message-username" style= {{color: message.color}}>{message.username || 'Anonymous'}</span>
                  <span className="message-content"><div dangerouslySetInnerHTML={urlDetector(message.content)} /></span>
                </div>
              );
            }
          }))}
        </div>

    );
  }
}
export default MessageList;
