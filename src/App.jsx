import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';


class App extends Component {
    constructor() {
        super();
        this.socket = null;
        this.state = {
            user: '',
            color: '',
            count: 0,
            currentUser: {name: ''},
            messages: []
        };
    }
  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function(event){
      console.log("Noww i've connected to the server");
    }



    this.socket.onmessage = (event) => {
      let parsedData = JSON.parse(event.data);
      const messages = this.state.messages.concat(parsedData);

      switch(parsedData.type){

        case 'incomingMessage':
          this.setState({messages: messages});
          break;

        case 'incomingNotification':
            this.setState({messages: messages});
          break;

        case 'incomingCount':
          this.setState({count: parsedData.count});
          break;

        case 'userColor':
          this.setState({user: parsedData.userID, color: parsedData.color});
          break
      }
    }


  }


  addMessage(event) {
    if(event.key === 'Enter' && event.target.value != '') {
      const message = {
        type: 'postMessage',
        content: event.target.value,
        username: this.state.currentUser.name,
      };
      this.socket.send(JSON.stringify(message));
      event.target.value = '';
    }

  }
  nameChange(event) {
    if(event.type == 'blur' || event.key == "Enter") {
      const lastName = this.state.currentUser.name;
      const newName = event.target.value;
      const notification = {
        type: 'postNotification',
        content: `${lastName || "Anonymous"} changed their name to ${newName || "Anonymous"}`,
      }
      this.socket.send(JSON.stringify(notification));
      this.setState({currentUser: {name: newName}});
    }
  }




    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand">Chatty</a>
                    <div className="navbar-user-counter"> {this.state.count} users online</div>
                </nav>
                <main className="messages">



                <MessageList
                  messages={this.state.messages}
                  color={this.state.color}/>
                </main>
                <ChatBar
                  nameChange={this.nameChange.bind(this)}
                  currentUser={this.state.currentUser.name}
                  addMessage={this.addMessage.bind(this)}/>
            </div>
        );
    }
}

export default App;
