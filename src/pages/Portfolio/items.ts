interface PortfolioItem {
  id: string;
  caption: string;
  description: string;
  link: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'risin',
    caption: 'Risin Production',
    description:
      'Some very interesting information about Risin Production. I have not already pridumat what this information will be about',
    link: 'link',
  },
  {
    id: 'irbags',
    caption: 'Inna Rybachuk Bags',
    description:
      'Some very interesting information about Inna Rybachuk bags. I have not already pridumat what this information will be about',
    link: 'link',
  },
];
