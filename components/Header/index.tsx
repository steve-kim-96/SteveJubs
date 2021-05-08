import React from 'react'
import Link from 'next/link'

const Header = () => (
  <div className='header'>
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />
    <header>
      <Link href='/projects'>
        <a>Projects</a>
      </Link>

      <Link href='/'>
        <a>Home</a>
      </Link>

      <Link href='/developer'>
        <a>Developer</a>
      </Link>
    </header>
  </div>
)

export default Header