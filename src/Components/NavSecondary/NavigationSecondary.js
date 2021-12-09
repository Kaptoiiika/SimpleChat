import React from "react"
import "./NavigationSecondary.css"
import ServerContent from "./ServerContent/ServerContent"
import serverChats from "../../Data/Data"

function NavigationSecondary() {
  const data = JSON.parse(serverChats.get())
  return (
    <div className="NavigationSecondary">
      <div className="Header">
          <h1>serverName</h1>
      </div>
      <ServerContent data={data}/>
    </div>
  )
}

export default NavigationSecondary
