interface PageListItem {
  id: number,
  date: string,
  title: string,
  genre: string,
  img: {
    src: string,
    alt: string
  },
  body: React.ReactElement
}

export default PageListItem