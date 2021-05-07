import PageListItem from '../interfaces/PageListItem'
import moment from 'moment'

const ProjectListItem: PageListItem[] = [
  {
    id: 1,
    date: moment('2021-02-24', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'DevPortfolio',
    genre: 'projects',
    link: 'https://github.com/harakeke-2021/DevPortfolio',
    img: {
      src: '/images/projects/DevPortfolio.png',
      alt: 'DevPortfolio after image'
    },
    body:
      <>
        <p>This is a big group project that was created at the end of the bootcamp. A team of four, I handled the authentication routes and backend APIs</p>
        <p>Nothing fancy, nothing elegant... just some code with a lot of bad smells but learnt a lot and had a good experience. What would I do differently???</p>
        <p>First thing I would do is learn and set up PostgreSQL. Reason? SQL was such a pain to work with... admittedly my SQL knowledge could use a boost in terms of</p>
        <p>tidying up my queries but you do with what you know. We had only a week to build this whole project but with its many ups and downs, at the end of 7 days</p>
        <p>The whole team was proud. This is something that we would like to continue and eventually release to the world</p>
      </>
  },

  {
    id: 2,
    date: moment('2021-03-05', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'SteveJubs',
    genre: 'projects',
    img: {
      src: '/images/projects/SteveJubs.jpg',
      alt: 'Personal website Photo'
    },
    body:
      <>
        <p>I started this personal website as a form of practice and also to show off some cool things that I hope to get done.</p>
        <p>First thing was to learn some additional tech. At EnSpiral Dev Academy we learnt JavaScript, React, Redux, a little bit of SQL (just the simple queries),</p>
        <p>Node, Express, Jest, and so on... A bit of fullstack application I suppose. But I wanted to take on Next, main reason being that it seems super cool, and</p>
        <p>also because I hate using bundlers and having to configure them for use of SASS (although with parcel it was easier than Webpack...) was a painful learning</p>
        <p>experience for all of my classmates. Next, as I've learnt, has a built in bundler... I should've been using it from the beginning. Oh well!</p>
        <p>TypeScript and Tailwind are also things I wanted to pick up as a challenge to myself. Building this website was a very long and painful process for me.</p>
        <p>Although just an add on to JS, TS still posed a little bit of a learning curb, especially because I was trying to integrate everything else on top.</p>
        <p>CSS wasn't really a part of the curriculum and having to dig into that myself was also challenging but quite fun to make and play with boxes on the screen</p>
      </>
  },
  {
    id: 3,
    date: moment('2021-03-05', 'YYYY-MM-DD').format('DD/MM/YYYY'),
    title: 'Another TODO list???',
    genre: 'projects',
    link: 'https://github.com/harakeke-2021/todo-full-stack/tree/steve',
    img: {
      src: '/images/projects/TODO.jpg',
      alt: 'Personal website Photo'
    },
    body:
      <>
        <p>Is it somehow a cliche to make a todo list? Well, at EDA it was an optional exercise but everyone got given an opportunity to create a TODO list</p>
        <p>I thought I'd spend the weekend and some free time at EDA to work on the todo list to get the practice in of building backend APIS, frontend APIS,</p>
        <p>React and Redux practice in. Some testing practice didn't hurt either.</p>
        <p>I didn't get full test coverage because as soon as I had gotten up to the current state of the project we went on to do something called multi-day projects.</p>
        <p>This was a full class project where we were divided into feature teams. This is done to get a little bit of experience of real life working conditions.</p>
        <p>So, this is my todo list. The design was already in place but the buttons, input and their functionality was all built by me.</p>
      </>
  },


]

export default ProjectListItem