import { useEffect, useState } from "react"
import { getArticlesByTopic, getTopics } from "../util.js/util"
import EachTopic from "./EachTopic";
import ArticlesFromTopic from "./ArticlesFromTopic";
import PropTypes from 'prop-types';


export default function Topics(props) {
       console.log(props)
       const {topics,setTopics} = props
         
          const [isLoading, setIsLoading] = useState(true);
          const [topic, setTopic] = useState('coding')
          const [arrayArticles, setArrayArticles] = useState([])
       
  useEffect(()=> {
        getTopics().then(({topics})=> {
        
        setTopics(topics)
          setIsLoading(false)
        })
  })


  useEffect(()=> {
      getArticlesByTopic(topic).then((topics)=> {
        setArrayArticles(topics) })
      },[topic])




  if (isLoading) return <p>Loading...</p>

    return (
      <>
      <select value={topic.slug} onChange={e=> setTopic(e.target.value)}>
      {
        topics.map((topic,i)=> {

          return <EachTopic topic={topic} key={i}/>

        })
      }
</select>
    <div className="grid">
      

<ul>
  <h1>{topic.slug}</h1>
  {arrayArticles.map((eachArticle)=> {
   return <ArticlesFromTopic eachArticle={eachArticle} key={eachArticle.article_id}/>
  })}
  
</ul>
    </div>
  
    </>
    )
  }

  Topics.propTypes = { 
    topics: PropTypes.array,
    setTopics: PropTypes.func
  }
