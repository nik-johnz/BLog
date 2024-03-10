import React, { useState } from 'react'
import '../CSS/User.css'
import { Link } from 'react-router-dom'
import Avatar from '../Assets/avatar1.png'
import { FaEdit } from "react-icons/fa"
import { FaCheck } from 'react-icons/fa'

const UserProfile = () => {
  const [avatar, setAvatar ] = useState(Avatar)
  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')
  const [currentPassword, setCurrentPassword ] = useState('')
  const [newPassword, setNewPassword ] = useState('')
  const [confirmPassword, setConfirmPassword ] = useState('')

  return (
    <section className='profile'>
      <div className="container profile_container">
        <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>
        <div className="profile_details">
          <div className="avatar_wraper">
          <div className="profile_avatar">
            <img src={avatar} alt="" />
          </div>
          {/* Form to Update Avatar */}
          <form className="avatar_form">
            <input type="file" name='avatar' id='avatar' accept='png, jpg, jpeg' onChange={e=> setAvatar(e.target.files[0])} />
            <label htmlFor="avatar"><FaEdit/></label>
          </form>
          <button className='profile_avatar-btn'><FaCheck/></button>
          </div>
          <h1>Nik Johnz</h1>

          {/* form ro update user details */}
          <form className="form profile_form">
            <p className='form_error-message'>This is a error message</p>
            <input type="text" placeholder='Enter your Full Name' value={name} onChange={e=>setName(e.target.value)} autoFocus/>
            <input type="email" placeholder='Enter your E-Mail ID' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your Current Password' value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)} />
            <input type="password" placeholder='Enter your New Password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm your New Password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
            <button type='submit' className='btn primary'>Update Details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile