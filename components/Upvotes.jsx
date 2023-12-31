


import { useState} from 'react'
import {upvoteArticle,downArticle} from '../util.js/util'
import PropTypes from 'prop-types';
function Upvotes(props) {
    const {id,setVotes,votes} = props
   const [newVote, setNewVotes] = useState(votes)
 
   const [errMsg, setErrMsg] = useState('')
   const arr1 = [newVote]
   const arr2 = [...arr1]
  
       
  function handleOnclick() {
  
          setNewVotes(arr2[0] = arr2[0]+1)       
          setVotes(newVote)
           setErrMsg('') 
         
          
       upvoteArticle(id).catch((err)=> {
        const {message} = err
        setErrMsg(message)
        setNewVotes(arr2[0] = arr2[0]-1)
    
    })
         
          
     
        }



        function handleOnclick2() {
  
            setNewVotes(arr2[0] = arr2[0]-1)       
            setVotes(newVote)
             setErrMsg('') 
           
            
         downArticle(id).catch((err)=> {
          const {message} = err
          setErrMsg(message)
          setNewVotes(arr2[0] = arr2[0]+1)
      
      })
         
    }
   

return (
   
    <div className='buttonsU'>
   

   <p className='voteMsg'> {newVote} {errMsg}</p>
 <button onClick={handleOnclick} className="voteButton">⬆️        
 </button> 
  <button onClick={handleOnclick2} className="voteButton"> ⬇️  
       
   </button>  
  
  </div>
  
)

}


Upvotes.propTypes = { 
    id: PropTypes.number,
    votes: PropTypes.number,
    setVotes: PropTypes.func
  }

export default Upvotes