import React from "react"
import "./NavigationMain.css"
import MenuTag from './MenuTag/MenuTag.js'
import ServerTag from "./serverTag/ServerTag.js"
import AddServer from './addServer/AddServer.js'

function NavigationMain() {
  return (
    <div className="NavigationMain" >
      <MenuTag/>
      -------
      <ServerTag />
      <ServerTag />
      <ServerTag />
      -------
      <AddServer/>
    </div>
  )
}

export default NavigationMain
