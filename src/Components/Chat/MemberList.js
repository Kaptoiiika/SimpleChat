import React from "react"
import Member from "./Member/Member.js"
import "./MemberList.css"

class MemberList {
  constructor(props) {
    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 }
      ],
      inputValues: { name: "", year: "" },
      pageTitle: "React components",
      showCars: false,
      newCar: {}
    }; 
  }
  render(){
  return (
    
    <div className="MemberList">
      <div className="MembeHeader"></div>
      <div className="Members">
        <Member />
        <Member />
        <Member />
      </div>
    </div>
)}
}

export default MemberList
