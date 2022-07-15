const express = require('express');
const axios = require('axios');
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT||3000;
app.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apikey=817a2fbbca8c413dacb5f7eede53179a';

        const news_data =await axios.get(url)
        
        res.status(200).send({articles:news_data.data.articles})
        
        
        
    
    } catch (error) {
        if(error.response){
            console.log(error);
        }
        
    }
})

app.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=817a2fbbca8c413dacb5f7eede53179a`

        const news_data =await axios.get(url);
        
        res.status(200).send({articles:news_data.data.articles});
        
        

        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


app.listen(port,()=> console.log(`connected on ${port}`))