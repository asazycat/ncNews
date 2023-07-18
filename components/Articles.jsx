
import { useEffect } from 'react'
import { getArticles } from '../util.js/util'


function Articles(props) {
 

    useEffect(()=> {

        getArticles().then((res)=> {
          console.log(res.data.articles)
        props.setArticles(res.data.articles)
        })
    }, [])
   
    console.log(props)

    return (
      <div className="articles">
      <ul>
         {
            props.articles.map((eachArticle)=> {
                return <li>
                    <img src={eachArticle.article_img_url} />  
                    <br />
                    <br />
                    <br />
                   <p>
                   {eachArticle.title} 
                   </p>
                   <p>
                    {eachArticle.author}
                    </p>  
                    <p>
                    {eachArticle.created_at}
                    </p>
                    <p>

                    {eachArticle.votes}
                    </p>
                
                </li>
            })
         }


        </ul>
      </div>
    )
  }
  
  export default Articles