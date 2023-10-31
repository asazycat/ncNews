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


export const getCommentsByArticleId = (article_id) => {
   return apiArticle.get(`/articles/${article_id}/comments`).then((res)=> {
   
    return res.data
   })
}

export const upvoteArticle = (article_id) => {


return apiArticle.patch(`/articles/${article_id}`,{ inc_votes : 1}).then((res)=>
{
   console.log(res.data.votes)
  return res.data
})
}


export const downArticle = (article_id) => {


   return apiArticle.patch(`/articles/${article_id}`,{ inc_votes : -1}).then((res)=>
   {
      console.log(res.data.votes)
     return res.data
   })
   }
   


export const postComment = (article_id,text) => {

return apiArticle.post(`/articles/${article_id}/comments`, {username:'cooljmessy', body:text}).then((res)=> {

  return res.data
}).catch((err)=> console.log(err))
}





export const getTopics = () => {

   return apiArticle.get('/topics').then((res)=> {
  
      return res.data
   })
}

export const getArticlesByTopic = (topic) => {
 
   return apiArticle.get('/articles').then((res)=> {
      
  
            const filtered = res.data.articles.filter((eachArticle)=> { if(eachArticle.topic === topic) {return eachArticle}})
            console.log(filtered)
            return filtered
      
   })
}

