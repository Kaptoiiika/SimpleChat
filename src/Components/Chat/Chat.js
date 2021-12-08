import React from "react"
import "./Chat.css"
import Message from "./Message/Message.js"

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.ChatName = props.ChatName ? props.ChatName : "default"
    this.userId = props.userId ? props.ChatName : -1

    this.state = {
      text: "",
    }
    this.state.messages = [
      { id: 0, userId: 1, msg: `Hello world` },
      { id: 1, userId: 1, msg: `id1 Ne lox` },
      { id: 2, userId: 1, msg: `Sam lox` },
    ]
    this.updateInput = this.updateInput.bind(this)
  }

  addMessage(msg) {
    const buffer = this.state.messages
    buffer.push({
      id: this.state.messages.length + 1,
      userId: this.userId,
      msg: this.state.text,
    })
    this.setState({ messages: buffer })
  }
  updateInput(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div className="Chat">
        <div className="ChatHeader">
          <div id="chatName">
            <h1>{this.ChatName}</h1>
          </div>
        </div>

        <div className="chatConent">
          {this.state.messages.map((obj) => {
            return <Message props={obj} />
          })}
        </div>

        <div className="messageInput">
          <input
            id="messageTextInput"
            type="text"
            onChange={this.updateInput}
          />
          <button id="messageSendButton" onClick={() => this.addMessage()} />
        </div>
      </div>
    )
  }
}

export default Chat
