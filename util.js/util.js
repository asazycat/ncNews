import axios from "axios";

const apiArticle = axios.create({
    baseURL: "https://nc-news-render.onrender.com/api"


})

export const getArticles = () => {
   
  return apiArticle.get('/articles').then((res)=> {
    const {articles} = res.data
      return articles
   })
}



export const getArticleById = (article_id) => {

return apiArticle.get(`/articles/${article_id}`).then((article)=> {
 
  return article.data

})
}

