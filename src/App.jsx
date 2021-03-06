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
                id: 1,
                username: "Bob",
                content: "Has anyone seen my marbles?",
              },
              {
                id: 2,
                username: 'Anonymous',
                content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
              }
            ]

        };
    }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");

      // Add a new message to the list of messages in the data store

      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)

      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.

      this.setState({messages: messages})
    }, 3000);
}



    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                </nav>
                <main className="messages"></main>
                <Message />
                <MessageList messages={this.state.messages} />
                <ChatBar name={this.state.currentUser.name}/>
            </div>
        );
    }
}

export default App;
