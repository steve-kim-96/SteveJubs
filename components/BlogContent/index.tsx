import Image from 'next/image'
import PageListItem from '../../lib/interfaces/PageListItem'
import React from 'react'
import { useRouter } from 'next/router'

export interface Props {
  items?: PageListItem[],
}

const BlogItems = ({ items = [] }: Props) => {
  const { id } = useRouter().query
  return (
    <div className='blog-content'>
      <ul>
        {items.map(item => {
          return item.id === Number(id)
            ? <li key={item.id}>
              <p>{item.date}</p>
              <h1><strong>{item.title}</strong></h1>
              {item.body}
              <Image alt={item.img.alt} src={item.img.src} width={570} height={300}/>
            </li>
            : null
        }
        )}
      </ul>
    </div>
  )
}

export default BlogItems
