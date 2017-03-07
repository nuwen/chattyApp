import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: 'Bob'}
    }
  }

    render() {
        console.log('Rendering <ChatBar/>');

        return (
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.currentUser.name}/>
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
            </footer>
        );
    }

}
export default ChatBar;
