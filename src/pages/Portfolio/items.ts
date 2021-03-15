import RisinSvg from './assets/risin.svg';
import IrbagsSvg from './assets/irbags.svg';

interface PortfolioItem {
  id: string;
  logo: string;
  caption: string;
  description: string;
  link: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'risin',
    logo: RisinSvg,
    caption: 'Risin Production',
    description:
      'Some very interesting information about Risin Production. I have not already pridumat what this information will be about',
    link: 'link',
  },
  {
    id: 'irbags',
    logo: IrbagsSvg,
    caption: 'Inna Rybachuk',
    description:
      'Some very interesting information about Inna Rybachuk bags. I have not already pridumat what this information will be about',
    link: 'link',
  },
];
