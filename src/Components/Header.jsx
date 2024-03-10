import React, { useState } from 'react'
import '../CSS/Header.css'
import { Link, useSearchParams } from 'react-router-dom'
import logo from '../Assets/logo.png'
import {FaBars} from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { ImProfile } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
    const closeNavHandler = ()=> {
    if(window.innerWidth < 800){
        setIsNavShowing(false);
    }    
    else{
        setIsNavShowing(true)
    }
    } 
  return (
    <nav>
        <div className="container nav_container">
            <div className='nav_logo'>
            <Link to="/" onClick={closeNavHandler} >
                <img src={logo} alt="Navbar Logo" />
            </Link>
            <p>Blog App</p>
            </div>
            <div class="nav-toggler">
                <span></span>
            </div>
            {isNavShowing && <ul className="nav_menu">
                <li><Link to="/profile/sdfsdf" onClick={closeNavHandler} ><ImProfile className='icon'/>My Profile</Link></li>
                <li><Link to="/create"  onClick={closeNavHandler} ><IoIosCreate className='icon'/> Create Post</Link></li>
                <li><Link to="/authors"  onClick={closeNavHandler} ><FaPenNib className='icon'/>Authors</Link></li>
                <li><Link to="/settings"  onClick={closeNavHandler} >  <IoSettings className='icon'/>Settings</Link></li>
                <li><Link to="/logout"  onClick={closeNavHandler} ><BiLogOut className='icon'/>Logout</Link></li>
            </ul>}
            <button className='nav_toggle-btn'  onClick={(e) => setIsNavShowing(!isNavShowing)} >
             { isNavShowing ? <AiOutlineClose/> : <FaBars/> } 
                <AiOutlineClose/>
            </button>
        </div>
    </nav>
  )
}

export default Header