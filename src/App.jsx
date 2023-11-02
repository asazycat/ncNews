
import Header from "../components/Header"
import Articles from "../components/Articles"
import Specific_article from "../components/SpecificArticle"

import { useState } from "react"

import { Routes, Route } from 'react-router-dom'
import Topics from "../components/Topics"
import Slideshow from "../components/Slideshow"

function App() {

  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])
  return (
    <section>
      <Header />
      <Slideshow/>
      <Routes>



        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles} />} />
        <Route path="/articles/:article_id" element={<Specific_article />} />
        <Route path="/topics" element={<Topics topics={topics} setTopics={setTopics}/>} />

      </Routes>

    </section>
  )
}

export default App
