import PageListItem from '../../lib/interfaces/PageListItem'
import ImageList from '../ImageList'
import React from 'react'

export interface Props {
  items?: PageListItem[],
}

const DeveloperBlogItems = ({ items = [] }: Props) => (
  <ul>
    {items.map(item =>
      <li key={item.id}>
          <p>{item.date}</p>
          <h1><strong>{item.title}</strong></h1>
          <p>{item.body}</p>
      </li>
    )}
  </ul>
)

export default DeveloperBlogItems
