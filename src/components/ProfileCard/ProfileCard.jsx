import React from "react"
import Styles from "../ProfileCard/ProfileCard.module.css"

function ProfileCard() {

    // from Value
    const getUserDetails = localStorage.getItem("formValue")
    const saveUserDetails = JSON.parse(getUserDetails)

    // Category Value
    const getCategoryValue = localStorage.getItem("CategoryValue")
    const saveCategoryValue = JSON.parse(getCategoryValue)

    return (
        <div className={Styles.profileContainer}>

            <div ><img src="/images/image 14.png" className={Styles.profilePic} /></div>

            <div className={Styles.valuesContainer}>
                <div className={Styles.userDetail}>
                    <p>{saveUserDetails["name"]}</p>
                    <p>{saveUserDetails["email"]}</p>
                    <p>{saveUserDetails["username"]}</p>
                </div>
                <div className={Styles.CategorySelect}>
                
                    {saveCategoryValue[0].name}
                   
                </div>
            </div>

        </div>
    )
}
export default ProfileCard;