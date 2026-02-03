import React from 'react'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-20 shadow-sm flex items-center pl-25 py-3.25'>
        <img src={logo} alt="logo video belajar" />
      </nav>
  )
}

export default Navbar
