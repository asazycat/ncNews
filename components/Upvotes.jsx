


import {useEffect, useState} from 'react'
import {upvoteArticle} from '../util.js/util'

function Upvotes(props) {
    const {id,setVotes,votes} = props
   const [newVote, setNewVotes] = useState(votes)
   const [state,setState] = useState(false)


    useEffect(()=> {
        if(state == true) { 
        upvoteArticle(id).then((newVoteCount)=> {
           const {votes} = newVoteCount
            setVotes(votes)
           setNewVotes(votes)
           setState(false)
           
        })

}},[state])



return (

 <p><button onClick={()=> setState(true)} >Upvote: </button>  {newVote}</p>
    
)

}




export default Upvotes