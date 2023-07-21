import axios from "axios";

const apiArticle = axios.create({
    baseURL: "https://nc-news-render.onrender.com/api"


})

export const getArticles = () => {
   
  return apiArticle.get('/articles').then((res)=> {
  
      return res.data
   })
}



export const getArticleById = (article_id) => {

return apiArticle.get(`/articles/${article_id}`).then((article)=> {
 
  return article.data

})
}




export const upvoteArticle = (article_id) => {


return apiArticle.patch(`/articles/${article_id}`,{ inc_votes : 1}).then((res)=>
{
 
 
  return res.data
})
}








