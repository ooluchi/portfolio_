
import "../index.css";





export default function NavBar() {

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-center">
      <div className="text-center py-4 ">
        <div className="">
          <div className="">
            
          </div>
          <div className="">
            <ul className={`flex flex-row justify-center gap-3`}>
              <li className=""><a href="#">Home</a></li>
              <li className=""><a href="#">Projects</a></li>
              <li className=""><a href="#">Contact</a></li>
              <li className=""><a href="https://drive.google.com/file/d/1mpdSX7dh640e2cBinxzBbRVd3mmONDJh/view?usp=sharing">Resume</a></li>
            </ul>
          </div>
          
        </div>
        
        
      </div>
      
    </nav>
  )
}


