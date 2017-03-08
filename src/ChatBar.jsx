import React, {Component} from 'react';

class ChatBar extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     currentUser: {name: ''}
  //   }
  // }

    render() {
        console.log('Rendering <ChatBar/>');

        return (
            <footer className="chatbar">
                <input
                  type='text'
                  className="chatbar-username"
                  placeholder="Your Name (Optional)"
                  onKeyUp={this.props.nameChange}
                  defaultValue={this.props.currentUser} />
                <input
                  className="chatbar-message"
                  placeholder="Type a message and hit ENTER"
                  // onKeyUp={props.addMessage}
                  onKeyUp={this.props.newMessage} />
            </footer>
        );
    }

}
ChatBar.defaultProps = {name: ''};
export default ChatBar;
