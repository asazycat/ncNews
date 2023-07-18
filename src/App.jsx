import Articles from "../components/Articles"
import dropDownBox from "../components/dropDownBox"
import Header from "../components/Header"
import Topics from "../components/Topics"
import { useState } from "react"



function App() {
 
       const [articles, setArticles] = useState([])
  return (
    <section>
      <Header/>
      <Articles articles={articles} setArticles={setArticles}/>
      <Topics/>
      <dropDownBox/>



    </section>
  )
}

export default App
