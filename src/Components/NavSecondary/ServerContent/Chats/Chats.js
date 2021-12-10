import React from "react"

let eventChageChat = new CustomEvent("chageChat", {
  detail: { group: 0, chat: 0 },
})

function Chats(props) {
  const groupObj = props.chats

  function hideChats(e) {
    e.target.classList.toggle("hide")
  }

  function changeChat(group, chatObj) {
    console.log(group, chatObj)
  }

  return (
    <div className={`GroupChat ${groupObj.id}`} onClick={hideChats}>
      {groupObj.name}
      <div className="chatName">
        {groupObj.chats.map((chatObj) => {
          return (
            <p onClick={changeChat.bind(this, groupObj.id, chatObj.id)}>
              {chatObj.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Chats
