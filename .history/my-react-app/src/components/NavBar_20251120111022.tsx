import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../index.css";





export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-center">
      <div className="text-center py-4 ">
        <div className="">
          <div className="lg:hidden">
            
          </div>
          <div className="w-full lg:block">
            <ul className={`flex flex-col gap-4 text-center lg:flex lg:flex-row lg:gap-8 lg:static`}>
              <li className=""><a href="#">Home</a></li>
              <li className=""><a href="#">Projects</a></li>
              <li className=""><a href="#">Contact me</a></li>
              <li className=""><a href="#">Resume</a></li>
            </ul>
          </div>
          
        </div>
        
        
      </div>
      
    </nav>
  )
}


