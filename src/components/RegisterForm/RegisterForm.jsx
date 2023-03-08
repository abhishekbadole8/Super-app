import { useState } from "react";
import Styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const inputData = {
    name: "",
    username: "",
    email: "",
    phone: "",
    tick: false,
  };

  const [getValue, setValue] = useState(inputData);

  const [formError, setFormError] = useState({});

  function handelChange(e) {
    setValue({ ...getValue, [e.target.name]: e.target.value });
  }

  function handelTick(e) {
    setValue({ ...getValue, [e.target.name]: e.target.checked });
  }

  // Validating Form Logic
  const validateForm = () => {
    let err = {};

    if (getValue.name === "") {
      err.name = "Name Required !!";
    }
    if (getValue.username === "") {
      err.username = "Username required !!";
    }
    if (getValue.email === "") {
      err.email = "Email required !!";
    }
    if (getValue.phone === "") {
      err.phone = "Mobile Number required  !!";
    }
    if (getValue.tick === false) {
      err.tick = "Tick Required !!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  function handelSubmit(e) {
    e.preventDefault();

    let isValid = validateForm();

    if (isValid) {
      navigate("/selectCategory");
    }
    else {
      console.log("In-Valid Form");
    }

  }

  return (
    <div className={Styles.container}>
      <h3 className={Styles.logo}>Super app</h3>
      <p className={Styles.aCreate}>Create your new account</p>

      <div className={Styles.socialText}>
        <label htmlFor="">Email</label>
        <p className={Styles.bar}>|</p>
        <label htmlFor="">Google</label>
      </div>

      <div className={Styles.formDiv}>
        <form action="" onSubmit={handelSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={getValue.name}
            onChange={handelChange}
          />
          <span className={Styles.errTag}>{formError.name}</span>

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={getValue.username}
            onChange={handelChange}
          />
          <span className={Styles.errTag}>{formError.username}</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={getValue.email}
            onChange={handelChange}
          />
          <span className={Styles.errTag}>{formError.email}</span>
          <input
            type="tel"
            placeholder="Mobile"
            name="phone"
            value={getValue.phone}
            onChange={handelChange}
            pattern="^((0091)|(\+91)|0?)[789]{1}\d{9}$"
          />
          <span className={Styles.errTag}>{formError.phone}</span>
          <div className={Styles.checkboxDiv}>
            <input
              type="checkbox"
              id={Styles.tickOk}
              name="tick"
              value={getValue.tick}
              onChange={handelTick}
            />

            <label htmlFor="tickOk" className={Styles.errTag}>
              Share my registration data with Superapp
            </label>
          </div>

          {/* Submit Button Here */}
          <div>
            <button className={Styles.signUp} to="/SelectCategory" onClick={handelSubmit}>SIGN UP</button>
          </div>
          
        </form>

        <div className={Styles.tandc}>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <a href="#">
              {" "}
              Terms and <br />
              Conditions of Use
            </a>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and <br />
            protects your personal data please head Superapp{" "}
            <a href="#">
              Privacy <br />
              Policy
            </a>
          </p>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
export default RegisterForm;
