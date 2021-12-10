import React from "react"
import "./NavigationMain.css"
import MenuTag from './MenuTag/MenuTag.js'
import ServerTag from "./serverTag/ServerTag.js"
import AddServer from './addServer/AddServer.js'

function NavigationMain({server}) {
  console.log(server);
  return (
    <div className="NavigationMain" >
      <ServerTag />
      -------
      <ServerTag />
      <ServerTag />
      <ServerTag />
      -------
      <ServerTag/>
    </div>
  )
}

export default NavigationMain
