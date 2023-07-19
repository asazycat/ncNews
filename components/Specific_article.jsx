
import { getArticleById } from '../util.js/util'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
function Specific_article () {

    const [article, setArticle] = useState({})
   
const {article_id} = useParams()

useEffect(()=> {

    getArticleById(article_id).then((articleObj)=> {
    
        setArticle(articleObj)

    })


},[])

return (

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
    </div>
)




}



export default Specific_article