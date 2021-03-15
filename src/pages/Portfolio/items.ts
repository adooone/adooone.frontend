import RisinSvg from './assets/risin.svg';
import IrbagsSvg from './assets/irbags.svg';
import { Theme } from '~/core/model/user';

interface PortfolioItem {
  id: string;
  logo: string;
  caption: string;
  description: string;
  theme: Theme;
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
    theme: 'dark',
  },
  {
    id: 'irbags',
    logo: IrbagsSvg,
    caption: 'Inna Rybachuk',
    description:
      'Some very interesting information about Inna Rybachuk bags. I have not already pridumat what this information will be about',
    link: 'link',
    theme: 'light',
  },
  {
    id: 'ptuha',
    logo: IrbagsSvg,
    caption: 'Ptuha Shop',
    description:
      'Some very interesting information about Risin Production. I have not already pridumat what this information will be about',
    link: 'link',
    theme: 'light',
  },
  {
    id: 'cart',
    logo: RisinSvg,
    caption: 'React Cart',
    description:
      'Some very interesting information about Risin Production. I have not already pridumat what this information will be about',
    link: 'link',
    theme: 'dark',
  },
];
