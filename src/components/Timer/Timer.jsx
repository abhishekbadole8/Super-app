import React, { useState } from "react";
import Styles from "../Timer/Timer.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer";


function Timer() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [duration, setDuration] = useState({ hours: 0, minutes: 0, seconds: 0 })

    function handelClick(e) {
        let id = e.target.id

        // Hours
        if (id == 11) {

            // setDuration(hours.push(hours * 60 * 60))
            setDuration['hours'] = (hours * 60 * 60)
            setHours(hours + 1)
            console.log("hours", id)
        }

        else if (id == 12) {
            // if (hours <= 0) {
            //     return null
            // } else {
            //     setDuration(hours - 1)
            // }
        }

        //minutes
        else if (id == 21) {
            setDuration['minutes'] = (minutes + 1)
            setMinutes(minutes + 1)
            console.log("Min", id)
        }
        else if (id == 22) {
            setDuration(minutes * 60)
            setMinutes(minutes - 1)
            console.log("Min", id)
        }

        //Seconds
        else if (id == 31) {
            if (seconds >= 60) {
                setSeconds(0)
                setDuration['minutes'] = 2
            } else {
                setDuration['seconds'] = (seconds)
                setSeconds(seconds + 1)
            }
        }

        else if (id == 32) {
            setDuration(seconds * 1000)
            setSeconds(seconds - 1)
            console.log("Sec", id)
        }
        else { console.log("else") }
    }

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className={Styles.timer}>Too lale...</div>;
        }

        return (
            <div className={Styles.timer}>

                <div className={Styles.value}>{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</div>

            </div>
        );
    };



    return (
        <div className={Styles.timerContainer}>

            <div className={Styles.timerLeftContainer}>

                <div className={Styles.timerDisplayBackground}>

                </div>

                <div className={Styles.timerwrapper}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={duration}

                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[10, 6, 3, 0]}
                        onComplete={() => ({ shouldRepeat: false, delay: 1.5 })}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>

            </div>

            <div className={Styles.timerValues}>

                <div className={Styles.timeBox}>

                    <div className={Styles.hoursBox}>
                        <p className={Styles.timerHeading}>Hours</p>
                        <label className={Styles.smallUpBtn} id="11" onClick={handelClick}></label>
                        <h4>{hours < 10 ? "0" + hours : hours}</h4>
                        <label className={Styles.smallDownBtn} id="12" onClick={handelClick}></label>
                    </div>

                    <span>:</span>

                    <div className={Styles.minutesBox}>
                        <p className={Styles.timerHeading}>Minutes</p>
                        <label className={Styles.smallUpBtn} id="21" onClick={handelClick}></label>
                        <h4>{minutes < 10 ? "0" + minutes : minutes}</h4>
                        <label className={Styles.smallDownBtn} id="22" onClick={handelClick}></label>
                    </div>

                    <span>:</span>

                    <div className={Styles.secondsBox}>
                        <p className={Styles.timerHeading}>Seconds</p>
                        <label className={Styles.smallUpBtn} id="31" onClick={handelClick}></label>
                        <h4>{seconds < 10 ? "0" + seconds : seconds}</h4>
                        <label className={Styles.smallDownBtn} id="32" onClick={handelClick}></label>
                    </div>

                </div>

                <div className={Styles.startBtn}>
                    <button onClick={() => handelClick}>Start</button>
                </div>

            </div>

        </div>
    )
}
export default Timer;