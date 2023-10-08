const pageRoutes = {
  home: '/',
  about: '/about',
  news: '/news',
  guide: '/guide',
  archive: '/archive',
};

export const navLinks: {
  label: string;
  url: string;
  icon: string;
  activeIcon: string;
}[] = [
  {
    label: 'About',
    url: pageRoutes.about,
    icon: 'mdi:about-circle-outline',
    activeIcon: 'mdi:about',
  },
  {
    label: 'News',
    url: pageRoutes.news,
    icon: 'fluent:news-16-regular',
    activeIcon: 'fluent:news-20-filled',
  },
  {
    label: 'Guide',
    url: pageRoutes.guide,
    icon: 'icon-park-outline:guide-board',
    activeIcon: 'icon-park-solid:guide-board',
  },
  {
    label: 'Journal',
    url: pageRoutes.archive,
    icon: 'majesticons:note-text-line',
    activeIcon: 'majesticons:note-text',
  },
];

export default pageRoutes;
