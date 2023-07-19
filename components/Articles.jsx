
import { useEffect } from 'react'
import { getArticles } from '../util.js/util'
import Article from './Article'

function Articles(props) {
 

    useEffect(()=> {

        getArticles().then((res)=> {
         
        props.setArticles(res.data.articles)
        })
    }, [])
   
   

    return (
        
      <div className="articles">
      <ul>
         {
            props.articles.map((eachArticle)=> {
                return <Article eachArticle={eachArticle} key={eachArticle.article_id}/>
            })
         }


        </ul>
      </div>
    )
  }
  
  export default Articles