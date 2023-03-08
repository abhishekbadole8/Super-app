import React, { useState, useEffect } from "react"
import Styles from "../NewsSection/NewsSection.module.css"


function NewsSection() {
    const [news, setNews] = useState()

    const randomNumber = Math.floor((Math.random() * 20) + 1);

    const API = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=66ed7cab13f549c4b39522a3875cbcb2"

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setNews(data.articles[randomNumber])

        } catch (error) {
            console.log(error)
        }
    }
    console.log(news)

    useEffect(() => {
        fetchApiData(API)
    }, [])

    return (
        <div className={Styles.newsContainer}>
            {news !== undefined ?
                <div className={Styles.newsImgContainer}>
                    <img src={news.urlToImage} className={Styles.newsImg} />
                    <div class={Styles.textBlock}>
                        <h5>{news.title}</h5>
                        <p>
                            <span>{news.publishedAt.substr(0, 10)}</span>
                            |
                            <span>{news.publishedAt.substr(11, 5)}</span>
                        </p>
                    </div>
                    <p className={Styles.newsText}>{news.description}</p>
                </div>
                : <div className={Styles.loading}>
                    <center>Loading Content...</center>
                </div>
            }
        </div>
    )
}
export default NewsSection;