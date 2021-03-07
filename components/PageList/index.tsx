import PageListItem from '../../lib/interfaces/PageListItem'
import ImageList from '../ImageList'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export interface Props {
  items?: PageListItem[],
}

const PageList = ({ items = [] }: Props) => {
  const { pathname } = useRouter()
  return (
    <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 gap-4 gap-x-4 rounded-md lg:px-6 xl:px-10 lg:mt-14">
    <ul>
      {items.map(item =>
          <li key={item.id}>
            <Link href={`${pathname}/${item.id}`}>
              <a>
                <h1><strong>{item.title}</strong></h1>
                <ImageList width={1024} height={576} {...item.img} />
              </a>
            </Link>
          </li>
      )}
    </ul>
    </div>
  )
}

export default PageList