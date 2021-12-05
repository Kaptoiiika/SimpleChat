import React from "react"

function activateLasers() {
  alert("MenuTag")
}

function MenuTag() {
  return (

      <div className="MenuTag" onClick={activateLasers}></div>
  )
}

export default MenuTag
