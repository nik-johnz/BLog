import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Register.css'

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  })

  const changeInputHandler = (e)=>{
    setUserData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          <p className="form_error-message">This is a Error Message</p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="email" placeholder='E-Mail' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <input type="password" placeholder='Confirm Password' name='cpassword' value={userData.cpassword} onChange={changeInputHandler} />
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an Account? <Link to="/login" >Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register