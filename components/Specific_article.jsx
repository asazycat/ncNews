
import { getArticleById } from '../util.js/util'
import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
function Specific_article (props) {

    const [article, setArticle] = useState({})
   
const {article_id} = useParams()
console.log(article_id)
useEffect(()=> {

     getArticleById(article_id).then((articleObj)=> {
        console.log(articleObj.data)
        setArticle(articleObj.data)

    })


},[])

return (

    <div className='article'>
    <h1 id='articleH1'> {article.title}</h1>
    <p className="articleBody">{article.body}</p>
    <div className='dateAuthor'>
    <p id='author'>Created By: {article.author}</p>
     <p id='date'>Created At: {article.created_at}</p>    
    </div>
    </div>
)




}



export default Specific_article