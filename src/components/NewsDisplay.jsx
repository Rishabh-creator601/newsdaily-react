import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';



let apiKey = process.env.REACT_APP_NEWS_DAILY_API_KEY ;

const  NewsDisplay = (props) => {

    const [data,setData] = useState(require("./data.json")["articles"]);
    const [page,setPage] = useState(1);
    const [results,setResults] =  useState(0)


    const fetchData = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?category=${props.cat}&from=2024-09-06&sortBy=publishedAt&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        let urlData = await fetch(url);
        let JsonData = await urlData.json()


        if (urlData.ok ){

            if(page < Math.ceil(JsonData.totalResults/20))
            setData(JsonData['articles']);
            setResults(JsonData.totalResults)
        
       //  console.log(`Data Loaded : CATEGORY ${cat} `)
        }

        else{
            //  console.log("END REACHED ")
        }

        

    }


    useEffect(()=>{
        fetchData()
    },[page]);


    const handleNextEvent = () =>{
        setPage(page +1)
        //  console.log(`PAGE NO : ${page}`)
    }


    const handlePrevEvent = () =>{
        setPage(page -1 )
        //  console.log(`To PAGE NO  : ${[page]}`)
    }


    const captialize = (text) =>{

        let text_ = text.charAt(0).toUpperCase() + text.slice(1);
        return text_

    }




  return (
<div className='container my-3'>
                <h1 className='text-center'>News Daily {captialize(props.cat)} headlines </h1>

                <div className='row'>


                    {data.map((el,index) => {

                        return <div className='col-md-4' key={index}>
                            <NewsItem title={el.title} desc={el.description} imgurl={el.urlToImage} author={el.author} Newsurl={el.url} />
                        </div>
                    })}

                </div>

                <div className="container d-flex justify-content-between">
                <button  type="button" disabled={page <= 1} className="btn btn-success" onClick={handlePrevEvent}> &larr; Previous  </button>
                <button  type="button" disabled={page > Math.ceil(results/20)} className="btn btn-success" onClick={handleNextEvent} >Next &rarr; </button>
                
                </div>

             
            </div>
      

  )
}



NewsDisplay.defaultProps = {
    cat:"health",
    pageSize:20
}

export default NewsDisplay
