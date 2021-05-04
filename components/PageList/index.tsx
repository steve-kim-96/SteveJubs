import PageListItem from '../../lib/interfaces/PageListItem'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export interface Props {
  items?: PageListItem[],
}

const PageList = ({ items = [] }: Props) => {
  const { pathname } = useRouter()
  return (
    <div className="blog-list">
      <ul>
        {items.map(item =>
          <li key={item.id}>
            <Link href={`${pathname}/${item.id}`}>
              <h1><a><strong>{item.id}. {item.title}</strong></a></h1>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PageList