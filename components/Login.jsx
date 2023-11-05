import { useState, useEffect } from "react"
import { SpecificLoginContext } from "./contexts/SpecificLogin"
import { useContext } from "react"
import { getUsers } from "../util.js/util"
export default function Login (props) {

        const {user, setUser} = useContext(SpecificLoginContext)
        
        const [username, setUsername] = useState('')
      
       

        const {login, setLogin} = props

        
        useEffect(() => {
            
            
            getUsers(username).then((data)=> {
                if (data.length === 1)
                {
              console.log(data)
              setUser(data[0])
              setLogin(true)
                }
               
            })
  
        
        }, [username])
       
        return (
    
        <div className="login">
           
            <form>
                <label>
                    Username:
                </label>
                <input  onChange={(e) => {setUsername(e.target.value)}}/> 

             
                <label><button type="submit" className='loginButton'>Login</button></label>
            </form>
        </div>
      
       )

}