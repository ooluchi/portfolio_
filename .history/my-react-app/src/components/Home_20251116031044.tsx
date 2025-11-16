import NavBar from './NavBar'
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <h3>Hi, I am Oluchi</h3>
        <p>I help brands look good online with clean code and intentional design.</p>
        <p>I build modern, responsive web experiences that feel as good as they look. Let's work together</p>
      </div>
      <div>
        
        <FaGithub/>
        <FaLinkedin />
        <FaMedium />
      </div>
    </div>
  )
}

