
import { useState,useEffect } from "react"
import {getCommentsByArticleId} from '../util.js/util'
import EachComment from "./EachComment"
import { Link } from "react-router-dom"
import PostComment from "./PostComment"


function Comments (props) { 

    const [posted,setPosted] = useState('')
  
    const {article_id} = props
        const [comments,setComments] = useState([]) 

    useEffect(()=> {
        getCommentsByArticleId(article_id).then((({comments}) => {
       
            setComments(comments)
            setPosted('')
           
        }))
    },[posted])




    return (
    <div className="cat">
   
  
    <ul className="listOfComments">
    
     {comments.map(eachComment=> {return <EachComment eachComment={eachComment} key={eachComment.comment_id}/>})}
</ul>
    
<PostComment article_id={article_id} posted={posted} setPosted={setPosted}/>
    </div>

    )





}

export default Comments