import Head from 'next/head'
import React from 'react'

const BlogListLayout = ({ children }) => (
    <>
      <Head>
        <title>SteveJubs</title>
      </Head>
      <main>
        <div className='blog-list-page'>
          {children}
        </div>
      </main>
    </>
  )

export default BlogListLayout
