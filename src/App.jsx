import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {name: ''},
            messages: [
              // {
              //   id: 1,
              //   username: "Bob",
              //   content: "Has anyone seen my marbles?",
              // },
              // {
              //   id: 2,
              //   username: 'Anonymous',
              //   content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
              // }
            ]
        };
    }
  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //
  //     // Add a new message to the list of messages in the data store
  //
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //
  //     this.setState({messages: messages})
  //   }, 3000);
  // }


  newMessage(event) {
    if(event.key === 'Enter' && event.target.value != '') {

      const message = {
        id: this.state.messages.length + 1,
        type: 'postMessage',
        content: event.target.value,
        username: this.state.currentUser.name,
      };
      const messages = this.state.messages.concat(message);

      this.setState({messages: messages})
      event.target.value = '';
      // this.socket.send(JSON.stringify(message))
    }
  }
  nameChange(event) {
    if(event.key === "Enter") {
      const lastName = this.state.currentUser.name;
      const newName = event.target.value;
      const notification = {
        id: this.state.messages.length + 1,
        type: "postNotification",
        content: `${lastName || "Anonymous"} changed their name to ${newName || "Anonymous"}`,
      }
      const messages = this.state.messages.concat(notification);

      this.setState({
          currentUser: {name: newName},
          messages: messages
          });
      }
      // this.socket.send(JSON.stringify(notification));
  }

  //
  // userCountChanged(data){
  //   this.setState({userCount: data.userCount});
  // }



    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                    <span id="user-counter"> 0 users online</span>
                </nav>
                <main className="messages">



                <MessageList messages={this.state.messages} />
                </main>
                <ChatBar
                  nameChange={this.nameChange.bind(this)}
                  currentUser={this.state.currentUser.name}
                  newMessage={this.newMessage.bind(this)}/>
            </div>
        );
    }
}

export default App;
