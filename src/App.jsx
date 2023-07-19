
import Header from "../components/Header"
import Articles from "../components/Articles"
import Specific_article from "../components/Specific_article"
import { useState } from "react"

import { Routes, Route } from 'react-router-dom'

function App() {

  const [articles, setArticles] = useState([])

  return (
    <section>
      <Routes>


        <Route path="/" element={<Header />} />
        <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles} />} />
        <Route path="/articles/:article_id" element={<Specific_article  />} />


      </Routes>

    </section>
  )
}

export default App
