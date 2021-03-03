import React from 'react'
import logo from "../../components/logo.png"
function Header() {
    return (
        <div className='header'>
            <a to='/'>
                <img
                    className="header__icon"
                   src={logo}
                    alt=""
                />
            </a>
           
            <div className='header__center'>
                <input type="text" />
                {/* <SearchIcon /> */}
            </div>

            <div className='header__right'>
                <p>Admin</p>
            </div>
        </div>
    )
}

export default Header
