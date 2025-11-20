import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";
import { MdOutlineCancel } from "react-icons/md";




export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center py-4 ">
        <h1 className="font-bold text-xl">Oluchi</h1>
        <div className="">
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}>
              <RxHamburgerMenu
                className={`h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              />
              <p className={`h-3 w-3 ${isOpen ? "block" : "hidden"}`}>X</p> 
            </button>
          </div>
          <div className={`w-full ${isOpen ? "block" : "hidden"} lg:block`}>
            <ul className={`flex flex-col gap-4 ${isOpen ? "block" : "hidden"} lg:flex lg:flex-row lg:gap-8 lg:static`}>
              <li className=""><a href="#">Home</a></li>
              <li className=""><a href="#">Projects</a></li>
              <li className=""><a href="#">About me</a></li>
              <li className=""><a href="#">Contact me</a></li>
              <li className=""><a href="#">Resume</a></li>
            </ul>
          </div>
          
        </div>
        
        
      </div>
      
    </nav>
  )
}


