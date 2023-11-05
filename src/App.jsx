
import Header from "../components/Header"
import Articles from "../components/Articles"
import Specific_article from "../components/SpecificArticle"
import Login from "../components/Login"
import { useState } from "react"

import { Routes, Route } from 'react-router-dom'
import Topics from "../components/Topics"
import Slideshow from "../components/Slideshow"

function App() {
  
  const [login, setLogin] = useState(false)
  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])


  if(!login) {
    return (<Login login={login} setLogin={setLogin}/>)
  }


  return (
    
    <section>
      
      <Header />
      
      <Routes>



        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles} />} />
        <Route path="/articles/:article_id" element={<Specific_article />} />
        <Route path="/topics" element={<Topics topics={topics} setTopics={setTopics}/>} />
        <Route path='/' element={<Slideshow/>} />
      </Routes>

    </section>
  )
}

export default App
