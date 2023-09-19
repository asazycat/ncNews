import { Link } from "react-router-dom"
export default function ArticlesFromTopic (props) {
    const {eachArticle} = props
    console.log('list atuff')
    return (
        <div className='gridItem'>
        <section className ="articleBox">           
         <Link to={`/articles/${eachArticle.article_id}` } className='eachArticle'>

            <li key={eachArticle.article_id}>
                
                <img src={eachArticle.article_img_url} alt={eachArticle.title} className="imgPart"/>
             
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