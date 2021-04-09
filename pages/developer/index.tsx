import Layout from '../../components/Layout'
import PageList from '../../components/PageList'
import DeveloperListItem from '../../lib/data/developerListItem'
import React from 'react'

const Developer = () => (
  <div className='developer'>
    <Layout>
      <h1>My journey as a dev</h1>
      <PageList items={DeveloperListItem} />
    </Layout>
  </div>
)

export default Developer
