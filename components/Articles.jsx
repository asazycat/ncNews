
import { useEffect, useState } from 'react'
import { getArticles } from '../util.js/util'
import Article from './Article'
import PropTypes from 'prop-types';

function Articles(props) {

  const [isLoading, setIsLoading] = useState(true);
   
  const {articles, setArticles} = props
   
    useEffect(()=> {

        getArticles().then(({articles})=> {
       
       setArticles(articles)
         setIsLoading(false)
       })
    })
   
    if (isLoading) return <p>Loading...</p>

    return (
        
      <div className="grid">
      <ul className='articlesList'>
         {
            articles.map((eachArticle)=> {
                return <Article eachArticle={eachArticle} key={eachArticle.article_id}/>
            })
         }


        </ul>
      </div>
    )
  }

  Articles.propTypes = { 
    setArticles: PropTypes.func ,
    articles: PropTypes.array
  } 
  
  export default Articles