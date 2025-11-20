import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

import "../index.css";


export default function Home() {
  return (
    <div>
      
      <div>
        <h3>Hi, <span className="text-pi">I am Oluchi</span></h3>
        <p>I help brands look good online with clean code and intentional design.</p>
        <p>I build modern, responsive web experiences that feel as good as they look. Let's work together</p>
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

