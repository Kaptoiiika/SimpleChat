import React from "react"
import users from "../../../Data/Users"

function Message(props) {
  const user = JSON.parse(users.get())[props.props.userId]
  return (
    <div className="Message">
      <img className="userAvatar" src={user.avatarSrc} />
      <h6 className="userName">{user.name}</h6>
      <p className="userText">{props.props.msg}</p>
    </div>
  )
}

export default Message
