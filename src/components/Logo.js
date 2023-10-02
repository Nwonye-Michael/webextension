import React from "react"
import logo from "../assets/images/logo.svg"

function Logo() {
  return (
    <div className="w-fit flex items-center gap-x-[9px] ">
      <img src={logo} alt="" className=" aspect-square w-[92px] " />{" "}
      <p className="text-[#100A42] font-bold text-[31.5px] ">HelpMeOut</p>
    </div>
  )
}

export default Logo
