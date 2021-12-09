export class UserList {
  constructor(option) {
    this.Users = option
  }
  get() {
    return this.Users
  }
  set(obj) {
    this.Users = obj
  }
  newUser() {

  }
}

export const users = new UserList(
  JSON.stringify({
    0: {
      name: 'kaptoiiika',
      avatarSrc:
        "http://www.dm-dobrov.ru/uploads/images/e/u/g/eugene_sagaz_kartoshechka_rastjot.jpg",
    },

    1: {
      name: 'dreven',
      avatarSrc:
        "https://avatars.mds.yandex.net/get-zen_doc/3845269/pub_5f663be34c07ce0604fb36be_5f663befc833846a1dad534c/scale_1200",
    },
    2: {
      name: 'tryen',
      avatarSrc:
        "https://lh3.googleusercontent.com/proxy/DIWq7keifo0kFUs-UrRMXEk7EBjlQdM9jf4ETeV7TKafftZpoudAnKUi8Q3aGrDKpbuUUDzJwTWDeLgQTgyLOFVSE9e-ii_TnDo3ygJPF6oImQ",
    },
  })
)
export default users
