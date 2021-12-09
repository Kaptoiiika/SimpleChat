import React, { useState } from "react"
import "./Chat.css"
import Message from "./Message/Message.js"
import { serverChats } from "../../Data/Data.js"

function useForceUpdate() {
  const [value, setValue] = useState(0) // integer state
  return () => setValue((value) => value + 1) // update the state to force render
}

function Chat(props) {
  const _chatId = props.chatID || 0
  const _userId = props.userId || 0
  const _groupId = props.groupId || 0
  const date = JSON.parse(serverChats.get())

  const [chatName, setChatName] = useState(date[_groupId].chats[_chatId].name)
  const [messages, setMessages] = useState(
    date[_groupId].chats[_chatId].messages
  )
  const [userId] = useState(_userId)

  const [textInput, setTextInput] = useState("")
  const forceUpdate = useForceUpdate()

  function addMessage() {
    const buf = messages
    buf.push({
      id: messages.length + 1,
      userId: userId,
      msg: textInput,
    })
    setMessages(buf)
    setTextInput("")
    forceUpdate()
  }
  function updateInput(event) {
    setTextInput(event.target.value)
  }

  return (
    <div className="Chat">
      <div className="Header">
        <h1>{chatName}</h1>
      </div>
      <div className="chatConent">
        {messages.map((obj) => {
          return <Message props={obj} />
        })}
      </div>

      <div className="messageInput">
        <input
          id="messageTextInput"
          type="text"
          autoComplete="off"
          value={textInput}
          onChange={updateInput}
          onSubmit={addMessage}
        />
        <button id="messageSendButton" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
    
  )
}

export default Chat
