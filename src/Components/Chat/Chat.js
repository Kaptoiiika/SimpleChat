import React from "react"
import "./Chat.css"
import Message from './Message/Message.js'

function addMessage(){

}

function Chat() {
  addMessage()

  return (
    <div className="Chat">
      <div className="ChatHeader">
        <div id="chatName">
          <h1>
          loremUllamco
          </h1>
        </div>
      </div>
      <div className="chatConent">
        <Message/>
      </div>
      <div className="messageInput">
        <input id="messageTextInput"/>
      </div>
    </div>
  )
}

export default Chat
