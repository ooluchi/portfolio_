import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

import "../index.css";


export default function Home() {
  return (
    <div>
      
      <div className="text-center ">
        <h1 className="font-semibold mt-20 text-2xl">Hi, I am <span className="text-pink-400">Oluchi</span></h1>
        <div className="mt-2 text-sm">
          <p>I help brands look good online with clean and responsive code with intentional design. Let's work together!</p>
        </div>
        
      </div>
      <div className="flex align-center">
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

