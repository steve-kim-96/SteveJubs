import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header>
    <Link href='/projects'>
      <a>Projects</a>
    </Link>

    <Link href='/'>
      <a>HomePage</a>
    </Link>

    <Link href='/developer'>
      <a>Developer</a>
    </Link>
  </header>
)

export default Header