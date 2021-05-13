import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className='header'>
    <nav className='ham-nav'>
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />
      <div className='ham-items'>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>

        <Link href='/'>
          <a>Home</a>
        </Link>

        <Link href='/developer'>
          <a>Developer</a>
        </Link>
      </div>
    </nav>
  </div>
)

export default Header