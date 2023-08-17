const pageRoutes = {
  home: '/',
  about: '/about',
  news: '/news',
  guide: '/guide',
  archive: 'archive',
}

export const navLinks: {
  label: string
  url: string
}[] = [
  {
    label: 'About',
    url: pageRoutes.about,
  },
  {
    label: 'News',
    url: pageRoutes.news,
  },
  {
    label: 'Guide',
    url: pageRoutes.guide,
  },
]

export default pageRoutes
