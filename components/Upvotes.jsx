


import {useEffect, useState} from 'react'
import {upvoteArticle} from '../util.js/util'







function Upvotes(props) {
    const {id,setVotes,votes} = props
   const [newVote, setNewVotes] = useState(votes)
   const [firstEffect,setFirstEffect] = useState(false)
   
   
    useEffect(()=> {
       
      
    if (firstEffect)
    {
          setVotes(newVote)
          
         
          
       upvoteArticle(id)
         }
          
        }   
        ,[newVote])

   

return (

 <p><button onClick={()=> {setNewVotes(newVote+1) 
    setFirstEffect(true)}} >Upvote: </button>  {newVote}</p>
    
)

}







export default Upvotes