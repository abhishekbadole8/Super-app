import React, { useState } from "react";
import Styles from "../Timer/Timer.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer";


function Timer() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [duration, setDuration] = useState(0)
    const [start, setStart] = useState(false);


    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            remainingTime = duration;
            return <div className={Styles.timer}>Too lale...</div>;
        }

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        return (
            <div className={Styles.timer}>
                <div className={Styles.value}>
                    {hours < 10 ? "0" + hours : hours}:
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </div>
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
                        key={start}
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

                        <label className={Styles.smallUpBtn}
                            onClick={() => { setHours(hours + 1) }}>
                        </label>

                        <h4>{hours < 10 ? "0" + hours : hours}</h4>

                        <label className={Styles.smallDownBtn}
                            onClick={() => { setHours(hours < 1 ? 0 : hours - 1) }}>
                        </label>

                    </div>

                    <span>:</span>

                    <div className={Styles.minutesBox}>
                        <p className={Styles.timerHeading}>Minutes</p>

                        <label className={Styles.smallUpBtn} id="21"
                            onClick={() => { setMinutes(minutes + 1) }}>
                        </label>

                        <h4>{minutes < 10 ? "0" + minutes : minutes}</h4>

                        <label className={Styles.smallDownBtn}
                            onClick={() => { setMinutes(minutes < 1 ? 0 : minutes - 1) }}>
                        </label>
                    </div>

                    <span>:</span>

                    <div className={Styles.secondsBox}>
                        <p className={Styles.timerHeading}>Seconds</p>

                        <label className={Styles.smallUpBtn}
                            onClick={() => {
                                setSeconds(seconds + 1);
                            }}>
                        </label>

                        <h4>{seconds < 10 ? "0" + seconds : seconds}</h4>

                        <label className={Styles.smallDownBtn}
                            onClick={() => {
                                setSeconds(seconds < 1 ? 0 : seconds - 1);
                            }}>
                        </label>
                    </div>

                </div>

                <div className={Styles.startBtn}>
                    {start ? (
                        <button
                            onClick={() => {
                                setDuration(0);
                                setStart(false);
                            }}
                        >
                            Stop
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                let tempDuration = 0;
                                tempDuration += seconds;
                                tempDuration += minutes * 60;
                                tempDuration += hours * 60 * 60;
                                setDuration(tempDuration);
                                setStart(true);
                            }}
                        >
                            Start
                        </button>
                    )}
                </div>
            </div>
        </div >
    )
}
export default Timer;