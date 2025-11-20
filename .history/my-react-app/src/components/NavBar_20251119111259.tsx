import "../index.css";


export default function NavBar() {
  return (
    <nav>
      <div className="flex">
        <ul className="list-none">
          <li className="flex-1"><a href="">Home</a></li>
          <li className="flex-1"><a href="">Projects</a></li>
          <li className="flex-1"><a href="">About me</a></li>
          <li className="flex-1"><a href="">Contact me</a></li>
          <li className="flex-1"><a href="">Resume</a></li>
        </ul>
        
      </div>
      
    </nav>
  )
}


