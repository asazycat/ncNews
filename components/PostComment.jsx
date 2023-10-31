
import { useState } from "react"
import {postComment} from '../util.js/util'
import PropTypes from 'prop-types';
function PostComment (props) {
const {article_id,setPosted} = props
const [text, setText] = useState('')


    function handleSubmit (e) {
   
        e.preventDefault()
        postComment(article_id,text)
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




PostComment.propTypes = {
    article_id: PropTypes.number,
    setPosted: PropTypes.func
}

export default PostComment
