
import { getArticleById } from '../util.js/util'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Comments from './Comments'
function Specific_article () {

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
const {article_id} = useParams()

useEffect(()=> {

    getArticleById(article_id).then((articleObj)=> {
    
        setArticle(articleObj)
        setIsLoading(false)
    })


},[])

if (isLoading) return <p>Loading...</p>

return (
<>
    <div className='article'>
        
    <h1 id='articleH1'> {article.title}</h1>
    <div className="articleBody">
    <img src={article.article_img_url} id="specificImg" alt={article.title}></img>
    <br/>
    <p id='des' className="articleBody">{article.body}</p>
    
    </div>
    
    <div className='dateAuthor'>
    <p id='author'>Created By: {article.author}</p>
     <p id='date'>Created At: {article.created_at}</p>    
    </div>
    <div className ='comments'>
        
    </div>
    </div>

    
     <Comments article_id={article_id}/>
    </>
)




}



export default Specific_article