import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";
import { MdOutlineCancel } from "react-icons/md";


const [isOpen, setIsOpen] =useState(false);

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-around items-center">
        <h1 className="font-bold">Oluchi</h1>
        <div className="">
          <div>
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden">
          <RxHamburgerMenu 
          />
          <MdOutlineCancel />
          </button>
          </div>
          <ul className=" flex flex-col lg:flex-row md:gap-8 list-none">
          <li className=""><a href="#">Home</a></li>
          <li className=""><a href="#">Projects</a></li>
          <li className=""><a href="#">About me</a></li>
          <li className=""><a href="#">Contact me</a></li>
          <li className=""><a href="#">Resume</a></li>
        </ul>
        </div>
        
        
      </div>
      
    </nav>
  )
}


