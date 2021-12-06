import React from "react"

import NavigationMain from "./Components/NavMain/NavigationMain.js"
import NavigationSecondary from "./Components/NavSecondary/NavigationSecondary.js"
import Chat from "./Components/Chat/Chat.js"
import MemberList from "./Components/Chat/MemberList.js"

import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavigationMain />
        <div className="Container">
          <NavigationSecondary />
          <div className="Container">
            <Chat />
            <MemberList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
