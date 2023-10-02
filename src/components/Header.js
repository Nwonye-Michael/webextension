import React from "react"
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <nav className="nav flex items-center justify-between px-[100px]">
      {" "}
      <div className=" logo w-fit h-fit items-center flex  gap-x-[8px]  ">
        <img src={logo} alt="logo" className=" aspect-square w-[40px] " />{" "}
        <p className="text-[#120B48] font-bold text-[16px]">HelpMeOut</p>
      </div>
      <div className="text-[#000000] font-medium text-[16px] flex w-fit gap-[40px]">
        <span className="">Features</span>
        <span className="">How it works</span>
      </div>
      <div className="text-[#120B48] font-semibold text-[16px] flex w-fit">
        Get Started
      </div>
    </nav>
  )
}

export default Header
