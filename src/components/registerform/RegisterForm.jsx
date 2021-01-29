
import './RegisterForm.css'
import gelombang1 from "../../assets/gelombang1.svg"
import gelombang2 from "../../assets/gelombang2.svg"
import bulet4 from "../../assets/bulet4.svg"
import bulet5 from "../../assets/bulet5.svg"
import bulet6 from "../../assets/bulet6.svg"
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

// import firebase ke register untuk dikonsum
import firebase from '../../config/firebase'
// import auth from 'firebase/firebase-auth'
import { useState } from 'react'

const RegisterForm = ()=>{

  //state buat penampung data register
  const [register, setRegister] = useState({
    email: "",
    password: "",
  })

  // fungsi untuk store data register ke firebase
  const handleRegister = (e) =>{
    e.preventDefault();

    // ambil fungsi dari firebase
    firebase
    .auth()
    .createUserWithEmailAndPassword(register.email, register.password)
    .then(user => {
      alert('berhasil register ')
      console.log(user)
    })
    .catch(err=>{
      alert(err)
    })

    // console.log(firebase)
  }

  return (
    <main className="form_wrapper">
      <div className="form_container">
        <div className="left_side">
          <div className="img">
          <img src={gelombang1} alt="gelombang pertama" className="gelombang1"/>
          <img src={gelombang2} alt="gelombang pertama" className="gelombang2"/>
          <img src={bulet4} alt="gelombang pertama" className="bulet4"/>
          <img src={bulet5} alt="gelombang pertama" className="bulet5"/>
          <img src={bulet6} alt="gelombang pertama" className="bulet6"/>
          <img src={logo} alt="gelombang pertama" className="logo"/>
          </div>
          <h3 className="welcomeText">WELCOME PAGE</h3>

          <h3 className="registerText">REGISTER <br /> TO CONTINUE ACCESS</h3>


        </div>

        <div className="right_side">
          <h1>Register</h1>

          <form className="register_form" onSubmit={handleRegister}>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
            <div className="gradient_border"></div>

            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={(e)=>{
                setRegister({
                  ...register,
                  email: e.target.value
                })
                console.log(register);
                console.log(e);
              }}
            />
            <div className="gradient_border"></div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e)=>{
                setRegister({
                  ...register,
                  password: e.target.value
                })
                console.log(register);
              }}
            />
            <div className="gradient_border"></div>

            <button className="register_button" type="submit">Continue <i className="fas fa-chevron-right arrow"></i> </button>
          </form>

          <div className="socmed_register">
            <h3>Or Login With</h3>
            <button className="g_register"><i className="fab fa-google-plus-g"></i>Sign In With Google</button>
            <button className="f_register"><i className="fab fa-facebook-f"></i>Sign in With Facebook</button>
            <Link to="/login">Login</Link>
          </div>
        </div>

      </div>
    </main>
  )
}

export default RegisterForm;