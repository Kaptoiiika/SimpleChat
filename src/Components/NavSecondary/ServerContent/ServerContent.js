import React from "react"
import Chats from "./Chats/Chats.js"

function ServerContent(props) {
  const serverGroups = props.data
  return (
    <div className="serverContent"> 
      {serverGroups.map((chats) => {
        return (<Chats chats={chats}/>
        )
      })}
    </div>
  )
}

export default ServerContent
