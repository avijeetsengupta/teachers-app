import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'




function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img 
            className="header__logo"
            src=" https://image.flaticon.com/icons/png/512/206/206897.png "
            />
            </Link>
            <span className="header__name">TutorsPoint</span>

        <div className="header__search">
            <input 
            className="header__searchInput"
            type="text"
            />
            <i className="fas fa-search "></i>
            
        </div>
        <div className="header__nav">
           <Link to="/tutorpage"> <div className="header__option">
                <span className="header__optionLineOne" >Find Tutor</span>
            </div></Link>
            <Link to="/user">
            <div className="header__option">
                <span className="header__optionLineOne" >User</span>
            </div>
            </Link>

            <Link to="/login">
            <div className="header__option">
                <span className="header__optionLineOne" >Login</span>
            </div>
            </Link>
           
        </div>
        
        </div>
    )
}

export default Header
