
import './LoginForm.css'
import gelombang1 from "../../assets/gelombang1.svg"
import gelombang2 from "../../assets/gelombang2.svg"
import bulet4 from "../../assets/bulet4.svg"
import bulet5 from "../../assets/bulet5.svg"
import bulet6 from "../../assets/bulet6.svg"
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const LoginForm = ()=>{
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

          <h3 className="loginText">SIGN IN <br /> TO CONTINUE ACCESS</h3>


        </div>

        <div className="right_side">
          <h1>Sign In</h1>

          <form action="" className="login_form">
            <input type="text" id="email" name="email" placeholder="Email Address"/>
            <div className="gradient_border"></div>
            <input type="password" id="password" name="password" placeholder="Password"/>
            <div className="gradient_border"></div>
            <button className="login_button">
              Continue 
              <i className="fa fa-chevron-right"></i>
            </button>
          </form>

          <div className="socmed_login">
            <h3>Or Login With</h3>
            <button className="g_login">
            <i className="fab fa-google-plus-g"></i>
              Sign In With Google
            </button>
            <button className="f_login">
            <i className="fab fa-facebook-f"></i>
              Sign In With Facebook
            </button>

            <Link to="/register">Register</Link>
          </div>
        </div>

      </div>
    </main>
  )
}

export default LoginForm;