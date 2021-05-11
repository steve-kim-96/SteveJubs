import Head from 'next/head'
import React from 'react'

const ProjectsListLayout = ({ children }) => (
    <>
      <Head>
        <title>SteveJubs</title>
      </Head>
      <main>
        <div className='projects-list-page'>
          {children}
        </div>
      </main>
    </>
  )

export default ProjectsListLayout