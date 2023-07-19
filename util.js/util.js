import axios from "axios";

const apiArticle = axios.create({
    baseURL: "https://nc-news-render.onrender.com/api"


})

export const getArticles = () => {
   
  return apiArticle.get('/articles')
}



export const getArticleById = (article_id) => {

return apiArticle.get(`/articles/${article_id}`)
}

