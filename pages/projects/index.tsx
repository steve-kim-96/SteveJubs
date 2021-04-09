import Layout from '../../components/Layout'
import PageList from '../../components/PageList'
import ProjectListItem from '../../lib/data/projectListItem'
import React from 'react'

const Projects = () => (
  <Layout>
    <div className='projects'>
      <h1>
        The works that I've done so far...
      </h1>
      <PageList items={ProjectListItem} />
    </div>
  </Layout>
)

export default Projects
