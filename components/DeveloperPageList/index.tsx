import PageListItem from '../../lib/interfaces/PageListItem'
import ImageList from '../ImageList'
import Link from 'next/link'
import React from 'react'

export interface Props {
  items?: PageListItem[],
}

const PageList = ({ items = [] }: Props) => (
  <ul>
    {items.map(item =>
      <li key={item.id}>
        <Link href={`developer/${item.id}`}>
          <a>
          <h1><strong>{item.title}</strong></h1>
          <ImageList width={1024} height={576} {...item.img} />
          </a>
        </Link>
      </li>
    )}
  </ul>
)

export default PageList