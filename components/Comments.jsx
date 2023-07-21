
import { useState,useEffect } from "react"
import {getCommentsByArticleId} from '../util.js/util'
import EachComment from "./EachComment"



function Comments (props) {
  
    const {article_id} = props
        const [comments,setComments] = useState([]) 

    useEffect(()=> {
        getCommentsByArticleId(article_id).then((({comments}) => {
       
            setComments(comments)
           
        }))
    },[])




    return (
    <>
    <h1 className="commentTitle">Comments</h1>
    <ul>
     
     {comments.map(eachComment=> {return <EachComment eachComment={eachComment} key={eachComment.comment_id}/>})}
</ul>
    
    
    </>

    )





}

export default Comments