
import { useEffect, useState } from 'react'
import { getArticles } from '../util.js/util'
import Article from './Article'

function Articles(props) {

  const [isLoading, setIsLoading] = useState(true);

  const {setArticles} = props

    useEffect(()=> {

        getArticles().then(({articles})=> {
       
       setArticles(articles)
         setIsLoading(false)
       })
    }, [])
   
    if (isLoading) return <p>Loading...</p>

    return (
        
      <div className="grid">
      <ul className='articlesList'>
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