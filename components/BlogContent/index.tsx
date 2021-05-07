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
              <Image alt={item.img.alt} src={item.img.src} width={570} height={300}/>
              {item.link ? <a href={item.link}>Click here to view the project</a> : null}
              {item.body}
            </li>
            : null
        }
        )}
      </ul>
    </div>
  )
}

export default BlogItems
