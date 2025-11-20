import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

import "../index.css";


export default function Home() {
  return (
    <div>
      
      <div className="text-center ">
        <h1 className="font-semibold mt-20 text-2xl">Hi, I am <span className="text-pink-400">Oluchi</span></h1>
        <div>

        </div>
        
      </div>
      <div>
        <a
          href="https://github.com/ooluchi"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub/>
        </a>
        <a
          href="https://github.com/ooluchi"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"  
        >
        <FaLinkedin />
        </a>

        <a
          href="https://medium.com/@ooluchiokoro"
          target="_blank"
          rel="noreferrer"
          aria-label="Medium"
        >
          <FaMedium />
        </a>
        
      </div>
    </div>
  )
}

