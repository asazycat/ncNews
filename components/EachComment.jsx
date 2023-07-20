function eachComment (props)
{
   const {eachComment} = props

    return (
        <>
        
        <li key={eachComment.comment_id} className='eachComment' >

            <h1 className="commentTitle">Username: {eachComment.author}</h1>
            
            <p>{eachComment.body}</p>
            <p>Date: {eachComment.created_at}</p>
            <p>Votes: {eachComment.votes}</p>
            </li>
        
        </>
    
        )
    





}





export default eachComment