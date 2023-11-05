
import { Link } from "react-router-dom"
import { SpecificLoginContext } from "./contexts/SpecificLogin"
import { useContext } from "react"
function Header() {
      const {user} = useContext(SpecificLoginContext) 
      console.log(user)
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
     
    </nav>
    <div className="user">
      <p className="usernameDisplay">{user.username}</p>
      <img src={user.avatar_url} height="50px" width="50px" className="imgProf"/>
    </div>
    </div>
    )
  }
  
  export default Header