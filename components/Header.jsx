
import { Link } from "react-router-dom"
function Header() {
 

    return (
      
      <nav>
        <h1 className='mainH'>Northcoders News Network</h1>
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
    </nav>
    )
  }
  
  export default Header