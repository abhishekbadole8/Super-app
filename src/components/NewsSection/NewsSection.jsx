import React, { useState, useEffect } from "react"
import Styles from "../NewsSection/NewsSection.module.css"


function NewsSection() {
    const [news, setNews] = useState([])

    const API = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=66ed7cab13f549c4b39522a3875cbcb2"

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setNews(data)
        } catch (error) {
            console.log(error)
        }
    }
    const saveAPIData = news.articles;
    // console.log(saveAPIData.slice(-1))

    // const newData= saveAPIData.slice(-1)

    // console.log(newData.publishedAt.substr(11, 5))

    useEffect(() => {
        fetchApiData(API)
    }, [])


    return (
        <div className={Styles.newsContainer}>
            <div className={Styles.newsImgContainer}>
                {/* <img src={saveAPIData[5].urlToImage} className={Styles.newsImg} /> */}
                <div class={Styles.textBlock}>
                    {/* {/* <h5>{saveAPIData[5].title}</h5> */} 
                    <p>
                        {/* <span>{saveAPIData[5].publishedAt.substr(0, 10)}</span> */}
                        |
                        {/* <span>{saveAPIData[5].publishedAt.substr(11, 5)}</span> */}
                    </p>
                </div>
            </div>
            {/* <p className={Styles.newsText}>{saveAPIData[5].description}</p> */}
        </div>
    )
}
export default NewsSection;