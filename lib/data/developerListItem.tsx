import PageListItem from '../interfaces/PageListItem'
import moment from 'moment'

const DeveloperListItem: PageListItem[] = [
  {
    id: 1,
    date: moment('2020-05-01', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Humble and curious beginnings',
    img: {
      src: '/images/developer/codecademy.jpg',
      alt: 'Developer journey image 1'
    },
    body:
      <>
        <p>Started with HTML and CSS. It was quite boring at first. All I did was declare elements and input text</p>
        <p>As cool as it was to see the end result being some cool text and colors on the screen, just like HTML is, the learning was too static...</p>
      </>
  },

  {
    id: 2,
    date: moment('2020-06-10', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'The real learning begins',
    img: {
      src: '/images/developer/JavaScript.png',
      alt: 'Developer journey image 2'
    },
    body: 
    <>
    <p>Very slowly I'd built up some knowledge and understanding of code structure through HTML. But now it was time to get serious!</p>
    <p>In comes JavaScript. This was when I felt the power of coding. Creating functions, using built in functions for manipulating arrays and objects?!</p>
    <p>The possibilities were endless... The power I had in my hand just ready to be learned and applied... I couldn't have been more excited!!!</p>
    <p>But with all good things, the learning became more and more difficult and without a good direction of what I wanted to do with my learning</p>
    <p>I was left wondering, "Is it worth it?" I kept on going anyway, powering through those thoughts, thinking back at the times I gave up because</p>
    <p>it was too difficult, and then realising down the line that I shouldn't have.</p>
    </>
  },

]

export default DeveloperListItem