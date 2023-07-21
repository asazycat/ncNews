


import {useEffect, useState} from 'react'
import {upvoteArticle} from '../util.js/util'

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
      
   

return (

 <p><button onClick={handleOnclick}>        
    Upvote: </button>  {newVote} {errMsg}</p>
    
)

}


export default Upvotes