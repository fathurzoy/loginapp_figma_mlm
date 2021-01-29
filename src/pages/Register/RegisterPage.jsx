
import './RegisterPage.css'
import bulet1 from "../../assets/bulet1.svg"
import bulet2 from "../../assets/bulet2.svg"
import bulet3 from "../../assets/bulet3.svg"
import RegisterForm from '../../components/registerform/RegisterForm'

const RegisterPage = ()=>{
  return(
    <main className="register_page">
      <RegisterForm />
      <img src={bulet1} alt="bulet pertama" className="bulet1"/>
      <img src={bulet2} alt="bulet dua" className="bulet2"/>
      <img src={bulet3} alt="bulet tiga" className="bulet3"/>
      
      
    </main>
  )
}

export default RegisterPage;