import React from "react";
import Styles from "../HomePage/HomePage.module.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NewsSection from "../../components/NewsSection/NewsSection"
import DateTimeWeather from "../../components/DateTimeWeather/DateTimeWeather"
import Notes from "../../components/Notes/Notes";
import Timer from "../../components/Timer/Timer";

import { useLocation } from "react-router-dom";

function HomePage() {

    const date = new Date()
    const fullDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    const getTime = (date.getHours() > 12 ? (date.getHours() - 12) : date.getHours()) + ":" + date.getMinutes() + " " + ((date.getHours() >= 12) ? "PM" : "AM");


    return (
        <div className={Styles.homePageContainer}>

            <div className={Styles.upperContainer}>

                <div className={Styles.upperCard}>

                    <div className={Styles.hLeftContainer}>
                        <ProfileCard />
                        <DateTimeWeather fullDate={fullDate} getTime={getTime} />
                    </div>
                    <div className={Styles.notesBox}>
                        <Notes />
                    </div>

                </div>

                <div className={Styles.timerMainContainer}>
                    <Timer />
                </div>

            </div>

            <div className={Styles.newsContainer}>
                <NewsSection fullDate={fullDate} getTime={getTime} />
                <button className={Styles.browseBtn}>Browse</button>
            </div>


        </div>
    )
}
export default HomePage;