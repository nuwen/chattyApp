import React, {Component} from 'react';

class ChatBar extends Component {


    render() {
        console.log('Rendering <ChatBar/>');

        return (
            <footer className="chatbar">
                <input
                  type='text'
                  className="chatbar-username"
                  placeholder="Your Name (Optional)"
                  // onBlur={this.props.nameChange}
                  onKeyUp={this.props.nameChange}
                  defaultValue='' />
                <input
                  className="chatbar-message"
                  placeholder="Type a message and hit ENTER"
                  onKeyUp={this.props.addMessage} />
            </footer>
        );
    }

}
ChatBar.defaultProps = {name: ''};
export default ChatBar;
