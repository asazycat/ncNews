
import { Link } from "react-router-dom"
function Header() {
 

    return (
      <div className="header">
          <h1 className='mainH'>Northcoders News Network</h1>
      <nav>
      
      <ul className="nav">
      
      <li><Link to='/' className="navLinks">
     Home
     </Link></li>

    <li> <Link to='/articles' className="navLinks">
     Articles
     </Link></li>

    <li> <Link to='/topics' className="navLinks">
     Topics
     </Link></li>
    
     </ul>
     <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
    </nav>
    </div>
    )
  }
  
  export default Header