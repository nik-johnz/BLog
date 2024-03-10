import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Register.css'

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const changeInputHandler = (e)=>{
    setUserData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='login'>
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login_form">
          <p className="form_error-message">This is a Error Message</p>
          <input type="email" placeholder='E-Mail' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Don't have an Account? <Link to="/register" >Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login