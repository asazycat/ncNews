import { useEffect, useState } from "react"
import { getArticlesByTopic, getTopics } from "../util.js/util"
import EachTopic from "./EachTopic";
import ArticlesFromTopic from "./ArticlesFromTopic";



export default function Topics(props) {
       const {topics,setTopics} = props
         
          const [isLoading, setIsLoading] = useState(true);
          const [topic, setTopic] = useState('')
          const [arrayArticles, setArrayArticles] = useState([])
       
  useEffect(()=> {
        getTopics().then(({topics})=> {
        
        setTopics(topics)
          setIsLoading(false)
        })
  }, [])


  useEffect(()=> {
      getArticlesByTopic(topic).then((topics)=> {
        setArrayArticles(topics) })
      },[topic])




  if (isLoading) return <p>Loading...</p>

    return (
      
    <div className="topics">
      <select value={topic.slug} onChange={e=> setTopic(e.target.value)}>
      {
        topics.map((topic,i)=> {

          return <EachTopic topic={topic} key={i}/>

        })
      }
</select>

<ul>
  <h1>{topic.slug}</h1>
  {arrayArticles.map((eachArticle)=> {
   return <ArticlesFromTopic eachArticle={eachArticle}/>
  })}
  
</ul>
    </div>
  
    
    )
  }

  
