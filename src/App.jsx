import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {name: 'Bob'},
            messages: [
              {
                username: "Bob",
                content: "Has anyone seen my marbles?",
              },
              {
                username: 'Anonymous',
                content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
              }
            ]

        };
    }



    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                </nav>
                <main className="messages"></main>
                <Message />
                <ChatBar name={this.state.currentUser.name}/>
            </div>
        );
    }
}

export default App;
