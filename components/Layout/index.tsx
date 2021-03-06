import Head from 'next/head'
import React from 'react'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>SteveJubs</title>
    </Head>
    <main>
      {children}
    </main>
  </>
)

export default Layout
