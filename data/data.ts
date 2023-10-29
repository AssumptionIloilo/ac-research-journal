export type CardItemsType = {
  icon: string;
  title: string;
  desc: string;
};

export const cardItems: CardItemsType[] = [
  {
    icon: '/praying.png',
    title: 'Faith and Spirituality',
    desc: 'Illuminating research with unwavering faith and spiritual insight.',
  },
  {
    icon: '/academic.png',
    title: 'Academic Excellence',
    desc: 'Advancing research through a relentless pursuit of academic greatness.',
  },
  {
    icon: '/social.png',
    title: 'Social Responsibility',
    desc: 'Empovering research for transformative impact, serving communities with purpose.',
  },
];

export type NewsCardItemsType = {
  img: string;
  text: string;
  date: string;
  bgColor: string;
  btnColor: string;
};

export const newsCardItems: NewsCardItemsType[] = [
  {
    img: '/news1.png',
    text: 'Cutting-Edge Breakthroughs Revealed in the Latest Edition of SHS Scientific Journal!',
    date: 'July 1, 2023',
    bgColor: '#ABACDB',
    btnColor: '#040593',
  },
  {
    img: '/news2.png',
    text: 'From Theory to Reality: SHS Scientific Journal Showcases Transformative Studies from Vision to Application!',
    date: 'July 7, 2023',
    bgColor: '#E8DCAD',
    btnColor: '#B99608',
  },
];
