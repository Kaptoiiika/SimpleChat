export class ServerChats {
  constructor(option) {
    this.serverChats = option
  }
  get() {
    console.log("getData");
    return this.serverChats
  }
  set(obj) {
    this.serverChats = obj
  }
  addMessage(){
    console.log(`pullMessege`);
  }
}

export const serverChats = new ServerChats(
  JSON.stringify([
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
            { id: 2, userId: 2, msg: `Sam lox` },
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
  ])
)
export default serverChats
