import Head from 'next/head'
import React from 'react'

const DeveloperListLayout = ({ children }) => (
    <>
      <Head>
        <title>SteveJubs</title>
      </Head>
      <main>
        <div className='developer-list-page'>
          {children}
        </div>
      </main>
    </>
  )

export default DeveloperListLayout
