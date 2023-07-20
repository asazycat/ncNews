
import { Link } from "react-router-dom"
function Header() {
 

    return (
      <>
      <h1 id='mainH'>Northcoders News Network</h1>
      <Link to='/articles'>
     <h1 className="header">Articles</h1>
     </Link>
    </>
    )
  }
  
  export default Header