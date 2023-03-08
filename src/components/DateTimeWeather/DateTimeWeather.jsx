import Styles from "../DateTimeWeather/DateTimeWeather.module.css"
import React, { useState, useEffect } from "react"

function DateTimeWeather({ fullDate, getTime }) {
    const [apiData, setApiData] = useState()

    let API = `https://api.weatherapi.com/v1/current.json?key=a1557b06016c487f93180807232802&q=India&aqi=yes`

    const fetchApiData = async (url) => {
        const result = await fetch(url);
        result.json().then((json) => {
            setApiData(json)
        })

    }

    console.log(apiData)

    useEffect(() => {
        fetchApiData(API)
    }, [])

    return (
        <div className={Styles.dateContainer}>

            <div className={Styles.dateUpperDiv}>
                <p>{fullDate}</p>
                <p>{getTime}</p>
            </div>
            <div className={Styles.fetchContainer}>
                {apiData !== undefined ?
                    <>
                        {/* 1. Rain Cloud */}

                        < div className={Styles.conditionContainer}>
                            <img src="/images/HeavyRain.png" />
                            <p className={Styles.conditionText}>{apiData.current.condition.text}</p>
                        </div>

                        <div className={Styles.bar}>|</div>

                        {/* 2. Temperatur  */}

                        <div className={Styles.tempContainer}>
                            <p className={Styles.tempText}>{apiData.current.temp_c}  C</p>
                            <div className={Styles.pressureContainer}>
                                <p><img src="/images/PressureImg.png" /></p>
                                <p className={Styles.pressureText}>{apiData.current.pressure_mb} mbar Pressure</p>
                            </div>
                        </div>

                        <div className={Styles.bar}>|</div>

                        {/* 3. Wind, Hum  */}

                        <div className={Styles.windHumContainer}>

                            <div className={Styles.iconContainer}>
                                <img src="/images/WindImg.png" />
                                <img src="/images/HumidityImg.png" />
                            </div>

                            <div className={Styles.TextContainer}>
                                <p>{apiData.current.wind_kph} km/h wind</p>
                                <p>{apiData.current.humidity} % Humidity</p>
                            </div>

                        </div>
                    </>
                    : "ok"}
            </div>
        </div >
    )
}
export default DateTimeWeather;