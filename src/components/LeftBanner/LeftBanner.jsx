// import React from "react";
import Styles from "../LeftBanner/LeftBanner.module.css"
import discoImg from "../img/image 13.png"
function LeftBanner() {
    return (
        <>
            <img src={discoImg} alt="disco-img" className={Styles.Container} />

            <div className={Styles.lColDiv}>
                <div className={Styles.lUpperTag}>
                    <p>Already have an account?</p>
                    <button className={Styles.logIn}>Login</button>
                </div>
                <div>
                    <h6>Discover new things on<br /> Superapp</h6>
                </div>
            </div>
        </>
    )
}

export default LeftBanner;