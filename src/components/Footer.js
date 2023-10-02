import React from "react"
import logoWhite from "../assets/images/logoWhite.svg"

const Footer = () => {
  return (
    <div className="footer w-[100vw] py-[98px] px-[130px] flex justify-between bg-[#120B48] h-[347px]  text-white ">
      <div className=" logo w-fit h-fit items-center flex  gap-x-[10px]  ">
        <img src={logoWhite} alt="logo" className=" aspect-square w-[40px] " />{" "}
        <p className="text-white font-bold text-[16px] ">HelpMeOut</p>
      </div>

      <ul className="text-[16px] gap-y-6 font-normal flex flex-col whitespace-nowrap text-left w-fit">
        <li className="font-semibold">Menu</li>
        <li>Home</li>
        <li>Converter</li>
        <li>How it Works</li>
      </ul>
      <ul className="text-[16px] gap-y-6 font-normal flex flex-col whitespace-nowrap text-left w-fit">
        <li className="font-semibold">Menu</li>
        <li>Home</li>
        <li>Converter</li>
        <li>How it Works</li>
      </ul>
      <ul className="text-[16px] gap-y-6 font-normal flex flex-col whitespace-nowrap text-left w-fit">
        <li className="font-semibold">Menu</li>
        <li>Home</li>
        <li>Converter</li>
        <li>How it Works</li>
      </ul>
    </div>
  )
}

export default Footer
