import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

import "../index.css";


export default function Home() {
  return (
    <div className="bg-orange-100	">
      
      <div className="text-center  ">
        <h1 className="font-semibold mt-12 text-xl">Hi, I am <span className="text-pink-400">Oluchi</span></h1>
        <div className="mt-2 text-sm">
          <p>I help brands look good online with clean and responsive code with intentional design </p>
          <p>Let's work together!</p>
        </div>
        
      </div>
      <div className="flex justify-center gap-5 mt-4">
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

