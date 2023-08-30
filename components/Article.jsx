import specific_article from "./SpecificArticle"
import { useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'


function Article(props) {



    const { eachArticle } = props


    return (
        <div className='gridItem'>
            <section className ="articleBox">            <Link to={`/articles/${eachArticle.article_id}` } className='eachArticle'>

                <li key={props.eachArticle.article_id}>
                    
                    <img src={eachArticle.article_img_url} alt={eachArticle.title} />
                 
                    <p className="titlePart">
                        {eachArticle.title}
                    </p>
                   
                </li>
 </Link>
            <p className="authorPart">
                    By {eachArticle.author}   
                    </p>
                    <p className="upvotePart">
                    Votes: {eachArticle.votes}    
                    </p> 


                    </section>
                    
                    
        </div>
    )



}






export default Article