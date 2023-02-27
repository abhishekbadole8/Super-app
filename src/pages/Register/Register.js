import React from "react";
import Styles from "../Register/Register.module.css"
import LeftBanner from "../../components/LeftBanner/LeftBanner";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function Register() {
    return (
        <div className={Styles.rContainer}>
            <LeftBanner />
            <RegisterForm />
        </div>
    )
}
export default Register;