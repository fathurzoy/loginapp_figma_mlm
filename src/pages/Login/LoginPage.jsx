
import './LoginPage.css'
import bulet1 from "../../assets/bulet1.svg"
import bulet2 from "../../assets/bulet2.svg"
import bulet3 from "../../assets/bulet3.svg"
import logo from "../../assets/logo.png"
import LoginForm from '../../components/loginform/LoginForm'

const LoginPage = ()=>{
  return(
    <main className="login_page">
      <LoginForm />
      <img src={bulet1} alt="bulet pertama" className="bulet1"/>
      <img src={bulet2} alt="bulet dua" className="bulet2"/>
      <img src={bulet3} alt="bulet tiga" className="bulet3"/>
      
      
    </main>
  )
}

export default LoginPage;