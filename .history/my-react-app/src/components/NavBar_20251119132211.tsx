import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";
import { MdOutlineCancel } from "react-icons/md";


const [isOpen, setIsOpen] = useState(false);

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-around items-center">
        <h1 className="font-bold">Oluchi</h1>
        <div className="">
          <div className="lg:hidden">
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="">
          <RxHamburgerMenu
          className={`h-3 w-3 ${isOpen ? "hidden" : "block"}`}
          />
          <MdOutlineCancel 
          className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
          />
          </button>
          </div>
          <div>

          </div>
          
        </div>
        
        
      </div>
      
    </nav>
  )
}


