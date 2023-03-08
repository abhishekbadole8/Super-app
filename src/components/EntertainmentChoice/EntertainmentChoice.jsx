import React, { useState } from "react";
import Styles from "../EntertainmentChoice/EntertainmentChoice.module.css"

function EntertainmentChoice() {

    const [image, setImage] = useState({})

    // const fetch = require('node-fetch');

    // const url = 'https://unogs-unogs-v1.p.rapidapi.com/search/deleted';

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '3d01df804emsh4bfc5657b3f3267p1decd4jsnb419edc8b1a7',
    //         'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    //     }
    // };

    // fetch(url, options)
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.error('error:' + err));


    return (
        <div className={Styles.entertainmentContainer}>
            
            <div className={Styles.navbar}>
                <h3>Super app</h3>
                <img src="/images/image ent.png" alt="" />
            </div>

            <h5>Entertainment according to your choice</h5>

            <p>Action</p>

            <div className={Styles.cards}>
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
            </div>
            <p>Action</p>

            <div className={Styles.cards}>
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
            </div>
            <p>Action</p>

            <div className={Styles.cards}>
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
                <img src="/images/image 20.png" alt="" />
            </div>
        </div>
    )
}

export default EntertainmentChoice;