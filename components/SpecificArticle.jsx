
import { getArticleById } from '../util.js/util'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Upvotes from './Upvotes'
import Comments from './Comments'
function Specific_article () {
const [votes,setVotes] = useState(0)
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
const {article_id} = useParams()

useEffect(()=> {
      console.log(votes)
    getArticleById(article_id).then((articleObj)=> {
    
        setArticle(articleObj)
        setIsLoading(false)
    })


})

if (isLoading) return <p>Loading...</p>

return (
<>
    <div className='article'>
        
    <h1 className='articleH1'> {article.title}</h1>
    <div className='imgDiv'>
    <img src={article.article_img_url} className="specificImg" alt={article.title}></img>
    </div>
    <div className='dateAuthor'>
    <p className='author'>Created By: {article.author}</p>
     <p className='date'>Created At: {article.created_at}</p>    
     
    </div>
   
    
    
    <p className="articleBody">{article.body}</p>

    
    
    

    <Upvotes votes={article.votes} setVotes={setVotes} id={article.article_id}/>

    
    </div>
    
    <Comments article_id={article_id}/>
     
    </>
)




}



export default Specific_article