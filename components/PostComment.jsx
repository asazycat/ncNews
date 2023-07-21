
import { useState } from "react"
import {postComment} from '../util.js/util'
function PostComment (props) {
const {article_id,posted,setPosted} = props
const [text, setText] = useState('')
const [user, setUser] = useState('') 

    function handleSubmit (e) {
   
        e.preventDefault()
        postComment(article_id,text,user)
        setPosted(text)

        
    }








    return (

       
        <div className="postComment">
        <h1>Post a Comment</h1>
        <form onSubmit={handleSubmit} >
           {/* <label id='user'>Username: <input type="text" value={user} onChange={e => setUser(e.target.value)}></input></label> */}
            <br/>
            <br/>
            <label id='user'>Body:</label>
            <br/>
            <textarea  rows="4" cols="50" value={text}  onChange={e=> setText(e.target.value)}></textarea>
            <br/>
            <button type='submit'>Post Comment</button>
        </form>
        </div>
      
    )



}






export default PostComment
