import React from 'react'
import { Link } from 'react-router-dom'
import './HeadFoot.css'

const Header = () => {
  return (
    <>
    <div id='header-flex'>
        <div className='header-link'><Link to='/'>Home</Link></div>
        <div className='header-link'><Link to='/student'>Student</Link></div>
        <div className='header-link'><Link to='/about'>About Us</Link></div>
    </div>

    </>
  )
}

export default Header