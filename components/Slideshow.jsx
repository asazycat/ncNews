
import { useState, useEffect } from "react"
import { getArticleById } from "../util.js/util"
export default function Slideshow () {


    const [article, setArticle] = useState({})
    const [slide, setSlide] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=> {
        getArticleById(slide).then((data) => {console.log('cat' + data)
        setArticle(data)
        setIsLoading(false)
        })
    }, [slide])
     

     function nextSlide () {
           let newSlide = slide + 1
           setSlide(newSlide)
     }
       
     function previousSlide () {
        let newSlide = slide - 1
        if (newSlide <= 1) { newSlide = 1}
        setSlide(newSlide)
  }
  if (isLoading) return <p>Loading...</p>
    return (<>

    <div className="slideShow">
         <h1>{article.title}</h1>
         <img src={article.article_img_url} alt={article.title} className="slideImg"/>
        
</div>
<div className="buttonss">
<button onClick={previousSlide} className="previousSlide"> 
←
        </button>
          
       <button onClick={nextSlide} className="nextSlide"> 
       →
       </button>
</div>
</>
    )

}