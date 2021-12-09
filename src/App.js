import React from "react"

import NavigationMain from "./Components/NavMain/NavigationMain.js"
import NavigationSecondary from "./Components/NavSecondary/NavigationSecondary.js"
import Chat from "./Components/Chat/Chat.js"
import MemberList from "./Components/MemberList/MemberList.js"

import "./App.css"

function App() {
  return (
    <div className="App wrapper">
      <NavigationMain />
      <NavigationSecondary />
      <Chat />
      <MemberList />
    </div>
  )
}

export default App
