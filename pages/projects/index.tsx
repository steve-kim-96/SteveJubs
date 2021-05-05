import PageList from '../../components/PageList'
import ProjectListItem from '../../lib/data/projectListItem'
import BlogListLayout from '../../components/BlogListLayout'
import React from 'react'


const Projects = () => (
  <BlogListLayout>
    <div className='list-intro'>
      <h1 className='intro-header'>The works that I've done so far...</h1>
      <p>I've listed some of the works that I've done. It showcases some of the different techs that I've touched</p>
    </div>
    <PageList items={ProjectListItem} />
  </BlogListLayout>
)

export default Projects
