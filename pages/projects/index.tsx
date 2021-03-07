import Layout from '../../components/Layout'
import PageList from '../../components/PageList'
import ProjectListItem from '../../lib/data/projectListItem'
import React from 'react'

const Projects = () => (

  <Layout>
    <h1 className="lg:text-4xl font-semibold mb-2">The works that I've done so far...</h1>
    <PageList items={ProjectListItem} />
  </Layout>

)

export default Projects
