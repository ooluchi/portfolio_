import "../index.css";


export default function NavBar() {
  return (
    <nav>
      <div className="flex">
        <h2 className="font-bold">Oluchi</h2>
        <ul className=" flex gap-5 list-none">
          <li className=""><a href="#">Home</a></li>
          <li className=""><a href="#">Projects</a></li>
          <li className=""><a href="#">About me</a></li>
          <li className=""><a href="#">Contact me</a></li>
          <li className="flex-1"><a href="#">Resume</a></li>
        </ul>
        
      </div>
      
    </nav>
  )
}


