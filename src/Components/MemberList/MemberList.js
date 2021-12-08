import React from "react"
import Member from "../Chat/Member/Member.js"
import "./MemberList.css"

function MemberList() {

  return (
    
    <div className="MemberList">
      <div className="MembeHeader"></div>
      <div className="Members">
        <Member />
        <Member />
        <Member />
      </div>
    </div>
)
}

export default MemberList
