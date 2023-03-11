import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "../EntertainmentChoice/EntertainmentChoice.module.css"

function EntertainmentChoice() {

    const navigate = useNavigate()

    const [image, setImage] = useState()

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=7e4621b2e9706ac920135de1d96a4c88&language=en-US&page=1`;

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setImage(data.results);
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(image)

    const getPosterURL = (posterpath) => {
        return `https://image.tmdb.org/t/p/original/${posterpath}`;
    };

    useEffect(() => {
        fetchData(URL)
    }, [])

    return (
        <div className={Styles.entertainmentContainer}>

            <div className={Styles.navbar}>
                <h3>Super app</h3>
                <img src="/images/image ent.png" alt="user-profile" onClick={()=>{navigate("/Homepage")}}/>
            </div>

            <h5>Entertainment according to your choice</h5>

            {image !== undefined ? (
                <>
                    {/* First Row */}
                    <p>Action</p>

                    <div className={Styles.cards}>
                        <div className={Styles.scroll}>
                            {image.map((da, index) => {
                                return index < 7 ? (
                                    <img
                                        src={getPosterURL(da.poster_path)}
                                        alt={da.title}
                                        key={da.id}
                                    />
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                    </div>

                    {/* Second Row */}
                    <p>Action</p>

                    <div className={Styles.cards}>
                        <div className={Styles.scroll}>
                            {image.map((da, index) => {
                                return index < 7 ? (
                                    <img
                                        src={getPosterURL(da.poster_path)}
                                        alt={da.title}
                                        key={da.id}
                                    />
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                    </div>

                </>
            ) : (
                "all ok"
            )}
        </div>
    )
}

export default EntertainmentChoice;