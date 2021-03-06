import PageListItem from '../../lib/interfaces/PageListItem'
import React from 'react'
import { useRouter } from 'next/router'

export interface Props {
  items?: PageListItem[],
}

const DeveloperBlogItems = ({ items = [] }: Props) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <ul>
      {items.map(item => {
        return item.id === Number(id)
          ? <li key={item.id}>
            <p>{item.date}</p>
            <h1><strong>{item.title}</strong></h1>
            <p>{item.body}</p>
          </li>
          : null
      }
      )}
    </ul>
  )
}

export default DeveloperBlogItems
