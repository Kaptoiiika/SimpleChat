import React from "react"

class UserSetting {
  constructor(option) {
    this.setting = option
  }
  get id() {
    console.log("get user")
    return this.setting.id 
  }
  get server() {
    console.log("get server")
    return this.setting.server 
  }
  get chat() {
    console.log("get chat")
    return this.setting.chat 
  }
  set id(obj) {
    console.log("set user")
    this.setting.id = obj
  }
  set server(obj) {
    console.log("set server")
    this.setting.server = obj
  }
  set chat(obj) {
    console.log("set chat")
    this.setting.chat = obj
  }
}
export const user = new UserSetting({
  id: 0,
  server: 0,
  chat: 0,
})
export default user
