import React from "react"

import NavigationMain from "./Components/NavMain/NavigationMain.js"
import NavigationSecondary from "./Components/NavSecondary/NavigationSecondary.js"
import Chat from "./Components/Chat/Chat.js"
import MemberList from "./Components/MemberList/MemberList.js"
import {user} from "./Data/UserProfile"
import "./App.css"

function App() {
  
  return (
    <div className="App wrapper">
      <NavigationMain user={user.id}/>
      <NavigationSecondary server={user.server}/>
      <Chat chat={user.chat}/>
      <MemberList server={user.server}/>
    </div>
  )
}

export default App
