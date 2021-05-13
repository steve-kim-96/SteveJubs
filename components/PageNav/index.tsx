import Link from "next/link"
import { useRouter } from "next/router"

const PageNav = () => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <>
      {pathname === '/' || pathname === '/projects'
        ?
        <div className='right-arrow'>
          <Link href={pathname === '/projects' ? '/' : '/developer'}>
            <a>{pathname === '/projects' ? 'Home' : 'developer'}</a>
          </Link>
        </div>
        : null
      }
      {pathname === '/' || pathname === '/developer'
        ?
        <div className='left-arrow'>
          <Link href={pathname === '/developer' ? '/' : '/projects'}>
            <a>{pathname === '/developer' ? 'Home' : 'projects'}</a>
          </Link>
        </div>
        : null
      }
    </>
  )
}

export default PageNav