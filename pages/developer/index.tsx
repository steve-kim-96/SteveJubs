import Layout from '../../components/Layout'
import PageList from '../../components/PageList/index'
import DeveloperListItem from '../../lib/data/developerListItem'
import React from 'react'

const Developer = () => (
  <>
    <Layout>
      <h1 className="lg:text-4xl font-semibold mb-2">My journey as a dev</h1>
      <PageList items={DeveloperListItem} />
    </Layout>
  </>
)

export default Developer
