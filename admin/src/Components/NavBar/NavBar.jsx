import React from 'react'
import './NavBar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/logob.png'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-log'/>
        <img src={navProfile} className='nav-profile 'alt="" />
    </div>
  )
}
