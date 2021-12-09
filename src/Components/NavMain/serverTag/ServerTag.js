import React from "react"

function activateLasers(){
  alert('ServerTag')
}

function ServerTag() {
  const server = ' '
  return (    


    <div className="serverTag" onClick={activateLasers}>
      <img src={server.img} />
    </div>
  )
}

export default ServerTag
