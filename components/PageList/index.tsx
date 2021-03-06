import PageListItem from '../../lib/interfaces/PageListItem'
import ImageList from '../ImageList'
import React from 'react'

export interface Props {
  items?: PageListItem[],
}

const PageList = ({ items = [] }: Props) => (
  <ul>
    {items.map(item =>
      <li key={item.id}>
        <p>{item.date}</p>
        <p>{item.title}</p>
        <p>{item.body}</p>
        <ImageList width={1024} height={576} {...item.img} />
      </li>
    )}
  </ul>
)

export default PageList