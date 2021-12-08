import React from "react"
import "./NavigationSecondary.css"

class NavigationSecondary extends React.Component {
  constructor(props) {
    super(props)
    this.serverChats = [
      {
        id: 0,
        name: "1 group",
        chats: [
          {
            id: 0,
            name: "Welcom",
            messages: [
              { id: 0, userId: 1, msg: `Hello world` },
              { id: 1, userId: 1, msg: `id1 Ne lox` },
              { id: 2, userId: 1, msg: `Sam lox` },
            ],
          },
          {
            id: 1,
            name: "goodbay",
            messages: [
              { id: 0, userId: 1, msg: `Chat2` },
              { id: 1, userId: 1, msg: `haha` },
              { id: 2, userId: 1, msg: `haha` },
            ],
          },
        ],
      },
      {
        id: 1,
        name: "2 group",
        chats: [
          {
            id: 0,
            name: "2 Welcom",
            messages: [
              { id: 0, userId: 1, msg: `2Hello world` },
              { id: 1, userId: 1, msg: `2id1 Ne lox` },
              { id: 2, userId: 1, msg: `2Sam lox` },
            ],
          },
          {
            id: 1,
            name: "2 goodbay",
            messages: [
              { id: 0, userId: 1, msg: `2Chat2` },
              { id: 1, userId: 1, msg: `2haha` },
              { id: 2, userId: 1, msg: `2haha` },
            ],
          },
        ],
      },
    ]
  }

  hideChats(e) {
    e.target.parentNode.classList.toggle("hide")
  }
  
  changeChat(group,chatObj){
    console.log(group,chatObj)
  }

  render() {
    return (
      <div className="NavHeader">
        <div id="serverName">
          <h1>Ne lox</h1>
        </div>
        <div className="NavigationSecondary">
          <div className="serverContent">
            {this.serverChats.map((groupObj) => {
              return (
                <div className={`GroupChat ${groupObj.id}`}>
                  <h4 onClick={this.hideChats}>{groupObj.name}</h4>

                  {groupObj.chats.map((chatObj) => {
                    return (
                      <p
                        className="chatName"
                        onClick={this.changeChat.bind(this, groupObj.id, chatObj.id)}
                      >
                        {chatObj.name}
                      </p>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationSecondary
