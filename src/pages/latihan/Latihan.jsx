import { useState } from "react";

const Latihan = () =>{

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : "",
  });

  return(
    <main className="page_latihan">


      <form className="register_form">

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={(e)=>{
            setUser({
              ...user,
              username: e.target.value
            })
          }}
        />
        <div className="gradient_border"></div>

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          onChange={(e)=>{
            setUser({
              ...user,
              email: e.target.value
            })
          }}
        />
        <div className="gradient_border"></div>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e)=>{
            setUser({
              ...user,
              password: e.target.value
            })
          }}
        />
        <div className="gradient_border"></div>

        <button className="register_button" type="submit">Continue <i className="fas fa-chevron-right arrow"></i> </button>
      </form>

      <h1>username: {user.username}</h1>
      <h1>email: {user.email}</h1>


      
    </main>
  )
}

export default Latihan;