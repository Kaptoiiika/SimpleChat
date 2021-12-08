import React from "react"



function Message(props) {
  return (
    <div className="Message">
        <p>{props.props.msg}</p>
    </div>
  )
}

export default Message
