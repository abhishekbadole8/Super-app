import React, { useState } from "react"
import Styles from "../ProfileCard/ProfileCard.module.css"

function ProfileCard() {

    // from Value
    const getUserDetails = localStorage.getItem("formValue")
    const saveUserDetails = JSON.parse(getUserDetails)

    // Category Value
    const getCategoryValue = localStorage.getItem("CategoryValue")
    const tempSaveCategoryValues = JSON.parse(getCategoryValue)

    const [saveCategoryValues, setSaveCategoryValues] = useState(
        tempSaveCategoryValues
    );


    const handelClick = (id) => {
        const newCategory = saveCategoryValues.filter((category) => {
            return category.id !== id;
        });
        setSaveCategoryValues(newCategory);
        localStorage.setItem("CategoryValue", JSON.stringify(newCategory));
    }

    return (
        <div className={Styles.profileContainer}>

            <div ><img src="/images/image 14.png" className={Styles.profilePic} alt="" /></div>

            <div className={Styles.valuesContainer}>

                <div className={Styles.userDetail}>
                    <p>{saveUserDetails["name"]}</p>
                    <p>{saveUserDetails["email"]}</p>
                    <p>{saveUserDetails["username"]}</p>
                </div>

                <div className={Styles.CategorySelect}>
                    {saveCategoryValues.length !== 0 ?
                        saveCategoryValues.map((values) => {
                            return (
                                <div key={values.id} className={Styles.CategoryTags}>
                                    <span className={Styles.CategoryName}>{values.name}</span>
                                    <span className={Styles.CategoryNameCancel}
                                        onClick={() => { handelClick(values.id) }}> X
                                    </span>
                                </div>);
                        })
                        : ""}
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;