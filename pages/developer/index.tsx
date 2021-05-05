import BlogListLayout from '../../components/BlogListLayout'
import PageList from '../../components/PageList'
import DeveloperListItem from '../../lib/data/developerListItem'
import React from 'react'

const Developer = () => (
    <BlogListLayout>
      <div className='list-intro'>
        <h1 className='intro-header'>My journey as a dev</h1>
        <p>I wanted to share my journey as a developer. I've broken them down into chapters</p>
      </div>
      <PageList items={DeveloperListItem} />
    </BlogListLayout>
)

export default Developer
