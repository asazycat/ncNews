import specific_article from "./SpecificArticle"
import { useEffect, useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'


function Article(props) {



    const { eachArticle } = props


    return (
        <>

            <Link to={`/articles/${eachArticle.article_id}`}>

                <li key={props.eachArticle.article_id}>
                    <img src={eachArticle.article_img_url} alt={eachArticle.title} />
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
            </Link>

        </>
    )



}






export default Article