import PageListItem from '../interfaces/PageListItem'
import moment from 'moment'

const DeveloperListItem : PageListItem[] = [
  {
    id: 1,
    date: moment('2020-05-01', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Humble and curious beginnings',
    img: {
      src: '/images/developer/codecademy.jpg',
      alt: 'Developer journey image 1'
    },
    body: <p>Started at the bottom now I'm here</p>
  }
]

export default DeveloperListItem