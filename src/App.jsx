import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {name: 'Bob'},
            messages: [],

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
                <ChatBar />
            </div>
        );
    }
}

export default App;
